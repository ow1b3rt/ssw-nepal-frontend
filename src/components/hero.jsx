import Image from "next/image";
import { ArrowRight, GraduationCap, UserRound } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-[49px] mt-[45px]">
      <div className="grid grid-cols-[1fr_1fr] items-center gap-[70px]">
        <div>
          <div className="mb-[35px] inline-block rounded-[24px] bg-[#45AD4A] px-[18px] py-[8px] text-[22pt] font-semibold text-white">
            Welcome to SSW Training Centre Nepal
          </div>

          <h1 className="text-[80pt] leading-[1.05] font-bold tracking-[-1px]">
            <span className="text-black">Skills That Shape</span>

            <br />

            <span className="text-[#D41920]">Your Future.</span>
          </h1>

          <p className="mt-[32px] max-w-[720px] text-[22pt] leading-[1.6] text-[#555555]">
            Empowering you with practical training, experienced instructors, and career-focused
            learning to help you build the skills you need for your future.
          </p>

          <button className="mt-[32px] flex items-center gap-2 rounded-[24px] bg-black px-[22px] py-[13px] text-[22pt] font-semibold text-white transition-transform hover:scale-[1.02]">
            Book an Appointment
            <ArrowRight className="size-12" />
          </button>
        </div>

        <div className="grid grid-cols-[1.15fr_1fr] gap-[14px]">
          <div className="flex flex-col gap-[14px]">
            <div className="relative flex-1 rounded-[10px]">
              <Image
                src="/hero-2.png"
                alt="SSW Training Centre"
                className="object-cover"
                height={400}
                width={400}
              />
            </div>

            <div className="flex w-[400px] items-center justify-center gap-4 rounded-[10px] bg-[#F2F6FF] p-[10px]">
              <GraduationCap className="size-12 fill-[#062D83] text-[#062D83]" />

              <div>
                <div className="text-[30pt] leading-none font-black text-black">1500+</div>

                <div className="mt-1 text-[25pt] font-bold text-black">Students Enrolled</div>
              </div>
            </div>

            <div className="relative flex-1 rounded-[10px]">
              <Image
                src="/hero-1.png"
                alt="SSW Training Centre"
                className="object-cover"
                height={18}
                width={400}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center justify-center gap-4 rounded-[10px] bg-[#F2F6FF] p-[10px]">
                <UserRound className="size-12 fill-[#062D83] text-[#062D83]" />

                <div>
                  <div className="text-[30pt] leading-none font-black text-black">20+</div>

                  <div className="mt-1 text-[25pt] font-bold text-black">Experts</div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-[10px] bg-neutral-300 text-neutral-500">
              Image
            </div>

            <div className="grid h-[125px] grid-cols-2 gap-[14px]">
              <div className="flex items-center justify-center rounded-[10px] bg-neutral-300 text-neutral-500">
                Image
              </div>

              <div className="flex items-center justify-center rounded-[10px] bg-neutral-300 text-neutral-500">
                Image
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-[10px] bg-[#F2F6FF] p-[10px]">
              <GraduationCap className="size-12 h-20 fill-[#062D83] text-[#062D83]" />

              <div>
                <div className="text-[30pt] leading-none font-black text-black">6+</div>

                <div className="mt-1 text-[25pt] font-bold text-black">Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
