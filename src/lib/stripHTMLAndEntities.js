import he from "he";

function stripHTMLAndEntities(html) {
    const noHTML = html.replace(/<[^>]+>/g, ""); // حذف تگ‌های HTML
    return he.decode(noHTML); // تبدیل HTML Entities به متن عادی
}

export default stripHTMLAndEntities