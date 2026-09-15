"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import {
  AdminLayout,
  PayloadEntityForm,
  RecordDetail,
  removeEmptyFields,
  useApi,
  useGet,
  useToast,
} from "@/packages/admin";
import { Loader2 } from "lucide-react";

import { entities } from "@/app/admin/entities";

function coerceRelationshipIds(values, fields) {
  const relationshipFields = fields.filter((f) => f.type === "relationship");
  if (relationshipFields.length === 0) return values;

  const coerced = { ...values };
  for (const field of relationshipFields) {
    const raw = coerced[field.name];
    if (raw == null || raw === "") continue;

    const toNumberOrKeep = (v) => (v !== "" && !isNaN(Number(v)) ? Number(v) : v);
    coerced[field.name] = Array.isArray(raw) ? raw.map(toNumberOrKeep) : toNumberOrKeep(raw);
  }
  return coerced;
}

export default function EntityEditPage() {
  const { entity: entitySlug, id } = useParams();
  const toast = useToast();
  const entity = entities[entitySlug];
  const { post, patch } = useApi();
  const router = useRouter();
  if (!entity) notFound();
  const isNew = id === "new";
  const canCreate = entity.canCreate !== false;
  if (isNew && !canCreate) notFound();

  const editableFields = entity.fields.filter((f) => f.editable !== false);
  const editableNames = new Set(editableFields.map((f) => f.name.split(":")[0]));
  if (!isNew && editableFields.length === 0) notFound();

  const apiPath = `/${entity.slug}`;
  const { data, loading } = useGet(isNew ? null : `${apiPath}/${id}`);

  if (!isNew && loading) {
    return (
      <AdminLayout title={entity.label}>
        <Loader2 size={18} className="animate-spin text-gray-400" />
        Loading…
      </AdminLayout>
    );
  }

  const item = data?.item ?? {};
  const hasStatus = entity.fields.some((f) => f.name.split(":")[0] === "status");

  // Fully read-only entity (no editable fields) — render a detail view instead of a form.
  if (!isNew && editableFields.length === 0) {
    return (
      <AdminLayout title={entity.label}>
        <RecordDetail
          title={`${entity.label} record`}
          subtitle={item.email ?? item.subject ?? item.name ?? ""}
          icon={entity.icon}
          backHref={`/admin/${entitySlug}`}
          fields={entity.fields}
          data={item}
          accentField={hasStatus ? "status" : null}
        />
      </AdminLayout>
    );
  }

  async function handleSubmit(values) {
    const definedValues = removeEmptyFields(values);
    const editableValues = Object.fromEntries(
      Object.entries(definedValues).filter(([key]) => editableNames.has(key)),
    );
    const url = isNew ? apiPath : `${apiPath}/${id}`;
    const payload = coerceRelationshipIds(editableValues, editableFields);
    const res = isNew ? await post(url, payload) : await patch(url, payload);
    if (res?.ok) {
      toast.success(`${entity.label} ${isNew ? "created" : "updated"} successfully`);
      router.replace(`/admin/${entitySlug}`);
    }
    return res;
  }

  return (
    <AdminLayout title={`${isNew ? "New" : "Edit"} ${entity.label}`} formId="entity-form">
      <PayloadEntityForm
        collectionFields={entity.fields}
        defaults={item}
        onSubmit={handleSubmit}
        externalId="entity-form"
      />
    </AdminLayout>
  );
}
