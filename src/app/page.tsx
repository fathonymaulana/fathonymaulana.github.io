import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ServiceA from "@/components/ServiceA";
import ServiceB from "@/components/ServiceB";
import ServiceC from "@/components/ServiceC";
import ToolStack from "@/components/ToolStack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ToolStack />
      <Projects />
      <Banner />
      <ServiceA />
      <ServiceB />
      <ServiceC />
    </div>
  );
}
