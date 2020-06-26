import { Page } from "../../redux/project/project";
import parser from '../parser/Parser';

export default function exportProject(page: Page): void{
  const parsedData = parser(page);

  const blob = new Blob([parsedData], {type:"text/html"});
  const url = window.URL.createObjectURL(blob);
  const fileName = page.title;
  const a = document.createElement("a");
  a.download = fileName;
  a.href = url;
  a.style.display = "none";
  a.onclick = () => document.body.removeChild(a);
  document.body.appendChild(a);

  a.click();
}