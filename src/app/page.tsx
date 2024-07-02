import LinkButton from "@/components/link-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-8 px-5 flex flex-col items-center gap-y-4">
      <div className="flex items-center">
        <div>
          <p>Hi, I&apos;m</p>
          <h1 className="text-4xl font-bold">William Lowe</h1>
        </div>
        <div>
          <Image 
            className="w-[300px] h-[300px] object-cover grayscale rounded-full scale-x-[-1]"
              src="/profile-removebg.png"
              alt="profile picture"
              width="300"
              height="300"
          />
        </div>
      </div>
      <p className="max-w-[768px] mx-auto leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente porro harum repudiandae doloremque adipisci unde ea neque, accusamus ipsum doloribus odit beatae tenetur distinctio esse eveniet est veniam excepturi!</p>
      <LinkButton 
        href="/gallery"
        text="See my work"
      />
    </main>
  );
}
