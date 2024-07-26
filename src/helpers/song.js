// Helper function to clean website names from string
export const cleanSiteNamesFromString = (str = "") =>
  str.replace(/\s*\(.*?\)\s*/g, "").trim();
