import { Select } from "./select/select";
import "./select/style.scss";

const select = new Select("#select", {
  //Options
  placeholder: "Выберите элемент",
  data: [
    { id: "1", value: "Раз" },
    { id: "2", value: "Два" },
    { id: "3", value: "Три" },
    { id: "4", value: "Четыре" },
    { id: "5", value: "Пять" },
  ],
});

window.s = select;
