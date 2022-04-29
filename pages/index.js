import Head from "next/head";
import Image from "next/image";
import { ToDoApp } from "../src/components/todoapp/Index";

export default function Home() {
  return (
    <div>
      <ToDoApp />
    </div>
  );
}
