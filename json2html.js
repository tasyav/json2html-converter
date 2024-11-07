export default function json2html(data) {
    // Get all unique keys in the data to create table headers
    const allKeys = Array.from(new Set(data.flatMap(obj => Object.keys(obj))));
  
    // Generate table HTML with data-user attribute
    let html = `<table data-user="v.tasya14@gmail.com"><thead><tr>`;
    
    // Add each key as a table header
    allKeys.forEach(key => {
      html += `<th>${key}</th>`;
    });
    html += `</tr></thead><tbody>`;
    
    // Generate table rows
    data.forEach(row => {
      html += `<tr>`;
      allKeys.forEach(key => {
        html += `<td>${row[key] || ""}</td>`;  // Leave cell empty if key is missing
      });
      html += `</tr>`;
    });
    
    html += `</tbody></table>`;
    return html;
  }
  