export async function preloadTemplates() {
  const templatePaths = [
    // Add paths to "modules/gurps-instand-defaults-searcher/templates"
  ];

  return loadTemplates(templatePaths);
}
