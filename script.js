const comparisons = [
  {theme:"approach",label:"Overall approach",india:"India's approach includes national AI strategy, responsible-AI initiatives, and evolving governance guidance. Check current official MeitY publications for the latest position.",eu:"The EU AI Act is a dedicated legal framework that uses a risk-based approach, with obligations depending on the type and risk of the AI system."},
  {theme:"risk",label:"Risk management",india:"Responsible-AI work highlights risks such as bias, safety, privacy and accountability. The exact requirements depend on the applicable Indian laws, policies and sector rules.",eu:"The Act groups AI uses by risk. Certain unacceptable-risk practices are prohibited; high-risk systems have specified obligations, with application dates that vary by provision."},
  {theme:"transparency",label:"Transparency",india:"Transparency and explainability are important responsible-AI principles. Requirements can also come from other applicable Indian laws and sector guidance.",eu:"The Act includes transparency duties for specified uses, including informing people in certain AI interactions and labelling certain AI-generated or manipulated content."},
  {theme:"accountability",label:"Accountability",india:"Organisations should assess applicable legal duties and governance guidance. This dashboard does not claim that one single Indian AI law covers every use case.",eu:"The Act establishes governance and enforcement roles for the European Commission's AI Office and national competent authorities, alongside obligations for relevant providers and deployers."},
  {theme:"innovation",label:"Innovation",india:"India's AI policy ecosystem also promotes AI development and adoption. Governance aims need to be considered alongside innovation and public benefit.",eu:"The EU framework aims to support trustworthy AI while protecting health, safety and fundamental rights; implementation is phased and some deadlines have been updated."}
];

const body = document.getElementById("comparisonBody");
const filter = document.getElementById("themeFilter");
const search = document.getElementById("searchInput");
const count = document.getElementById("resultCount");

function renderRows() {
  const selected = filter.value;
  const term = search.value.trim().toLowerCase();
  const visible = comparisons.filter(item => {
    const matchesTheme = selected === "all" || item.theme === selected;
    const matchesText = `${item.label} ${item.india} ${item.eu}`.toLowerCase().includes(term);
    return matchesTheme && matchesText;
  });
  body.innerHTML = "";
  visible.forEach(item => {
    const row = document.createElement("tr");
    [item.label, item.india, item.eu].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    body.appendChild(row);
  });
  count.textContent = `Showing ${visible.length} of ${comparisons.length} comparison themes`;
}
filter.addEventListener("change", renderRows);
search.addEventListener("input", renderRows);
renderRows();
