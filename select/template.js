export const getTemplate = (data = [], placeholder) => {
  const text = placeholder ?? "Placeholder по умолчанию";
  const items = data.map((item) => {
    return `
         <li class="select__item" data-type="item" data-value="${item.id}">${item.value}</li>
         `;
  });
  return `
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
            <i class="fa fa-chevron-down" data-type="arrow"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
            ${items.join("")}
            </ul>
        </div>
      `;
};
