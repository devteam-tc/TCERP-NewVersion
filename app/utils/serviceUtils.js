import { notFound } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import servicesData from '../../data/servicesData.json';
// import { VALID_SERVICE_SLUGS } from '@/app/config/services';
import { VALID_SERVICE_SLUGS } from '../../app/config/services';


/**
 * Check if a slug is a valid service slug
 * @param {string} slug - The slug to validate
 * @returns {boolean} Whether the slug is valid
 */
export function isValidServiceSlug(slug) {
  return VALID_SERVICE_SLUGS.includes(slug);
}

/**
 * Get service data for a given slug
 * @param {string} slug - The service slug
 * @returns {Object|null} The service data or null if not found
 */
export function getServiceData(slug) {
  if (!isValidServiceSlug(slug)) {
    return null;
  }

  const service = servicesData[slug];
  
  if (!service) {
    return null;
  }

  return service;
}

/**
 * Generate breadcrumbs for service pages
 * @param {string} slug - The service slug
 * @param {string} serviceTitle - The service title
 * @returns {Array<{label: string, link: string|null, icon?: Function}>} Breadcrumb items
 */
export function getServiceBreadcrumbs(slug, serviceTitle) {
  return [
    { label: 'Home', link: '/', icon: FaHome },
    { label: 'All Services', link: '/services' },
    { label: serviceTitle, link: null },
  ];
} 