document.addEventListener("turbo:load", () => {
  const tagNameInput = document.querySelector("#post_form_tag_name");
  if (tagNameInput){
    const inputElement = document.getElementById("post_form_tag_name");
    inputElement.addEventListener("input", () => {
      const keyword = document.getElementById("post_form_tag_name").value;
      console.log(keyword);
    });
  };
});