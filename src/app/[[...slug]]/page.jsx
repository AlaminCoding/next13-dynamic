import styles from "./page.module.css";
import Homepage from "@/components/pages/Homepage";
import Basicpage from "@/components/pages/Basicpage";
import { pageUrl } from "@/utility/endpoints";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const pathName = params.slug ? "/" + params.slug.join("/") : "/";
  const res = await fetch(
    `${pageUrl}/find/?format=json&redirect=false&html_path=${pathName}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    notFound();
  }
  const pageData = await res.json();

  const pageObject = {
    "pages.HomePage": Homepage,
    "pages.BasicPage": Basicpage,
  };

  const PageComponent = pageObject[pageData.meta.type];
  return <PageComponent key={pageData.meta.id} data={pageData} />;
}
