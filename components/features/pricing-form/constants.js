// Module configuration with base prices (in INR)
export const MODULES = {
    CRM: { name: 'CRM', basePrice: 500 },
    Sales: { name: 'Sales', basePrice: 500 },
    Purchase: { name: 'Purchase', basePrice: 500 },
    Inventory: { name: 'Inventory', basePrice: 500 },
    Production: { name: 'Production', basePrice: 500 },
    Jobwork: { name: 'Job Work', basePrice: 500 },
    QAandQC: { name: 'QA & QC', basePrice: 500 },
    FixedAssets: { name: 'Fixed Assets', basePrice: 500 },
    PlantMaintenance: { name: 'Plant Maintenance', basePrice: 500 },
    HRM: { name: 'HRM', basePrice: 500 },
    FinanceandAccounting: { name: 'Finance & Accounting', basePrice: 500 },
    ImportsAndExports: { name: 'Imports & Exports', basePrice: 500 },
    ProjectManagement: { name: 'Project Management', basePrice: 500 },
    Design: { name: 'Design', basePrice: 500 },
    POS: { name: 'POS', basePrice: 500 },
    
};

export const CUSTOMIZATION_LEVELS = [
  { level: 1, name: 'Level 1 - Basic Customization', percentage: 10 },
  { level: 2, name: 'Level 2 - Standard Customization', percentage: 20 },
  { level: 3, name: 'Level 3 - Advanced Customization', percentage: 30 },
  { level: 4, name: 'Level 4 - Premium Customization', percentage: 40 },
  { level: 5, name: 'Level 5 - Enterprise Customization', percentage: 50 }
];

export const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹'
};

export const INDUSTRIES = [
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Education',
  'Technology',
  'Finance',
  'Construction',
  'Transportation',
  'Hospitality',
  'Agriculture',
  'Energy',
  'Media & Entertainment',
  'Real Estate',
  'Telecommunications',
  'Other'
]; 