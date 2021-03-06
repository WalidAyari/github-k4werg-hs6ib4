/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

export const BROWSER_RESOLUTION_WIDTH = 1200;
export const BROWSER_RESOLUTION_HEIGHT = 800;

export const BROWSER_WAIT_TIMEOUT = 30000;

// Application configs
export const APP_HOST = 'http://localhost:4000';

// Repository configs
export const REPO_API_HOST = 'http://localhost:8080';
export const REPO_API_TENANT = '-default-';

// Admin details
export const ADMIN_USERNAME = 'admin';
export const ADMIN_PASSWORD = 'admin';
export const ADMIN_FULL_NAME = 'Administrator';

// Application Routes
export const APP_ROUTES = {
    FAVORITES: '/favorites',
    FILE_LIBRARIES: '/libraries',
    LOGIN: '/login',
    LOGOUT: '/logout',
    PERSONAL_FILES: '/personal-files',
    RECENT_FILES: '/recent-files',
    SHARED_FILES: '/shared',
    TRASHCAN: '/trashcan'
};

// Sidebar labels
export const SIDEBAR_LABELS = {
    PERSONAL_FILES: 'Personal Files',
    FILE_LIBRARIES: 'File Libraries',
    SHARED_FILES: 'Shared',
    RECENT_FILES: 'Recent Files',
    FAVORITES: 'Favorites',
    TRASH: 'Trash'
};

// Site visibility
export const SITE_VISIBILITY = {
    PUBLIC: 'PUBLIC',
    MODERATED: 'MODERATED',
    PRIVATE: 'PRIVATE'
};

// Site roles
export const SITE_ROLES = {
    SITE_CONSUMER: 'SiteConsumer',
    SITE_COLLABORATOR: 'SiteCollaborator',
    SITE_CONTRIBUTOR: 'SiteContributor',
    SITE_MANAGER: 'SiteManager'
};
