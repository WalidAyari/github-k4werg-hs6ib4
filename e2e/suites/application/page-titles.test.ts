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

import { browser } from 'protractor';

import { SIDEBAR_LABELS } from '../../configs';
import { LoginPage, LogoutPage, BrowsingPage } from '../../pages/pages';

describe('Page titles', () => {
    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
    const page = new BrowsingPage();

    xit('');

    describe('on Login / Logout pages', () => {
        it('on Login page - [C217155]', () => {
            loginPage.load()
                .then(() => {
                    expect(browser.getTitle()).toContain('Sign in');
                });
        });

        it('after logout - [C217156]', () => {
            loginPage.loginWithAdmin()
                .then(() => page.signOut())
                .then(() => {
                    expect(browser.getTitle()).toContain('Sign in');
                });
        });

        it('when pressing Back after Logout - [C280414]', () => {
            loginPage.loginWithAdmin()
                .then(() => page.signOut())
                .then(() => browser.navigate().back())
                .then(() => {
                    expect(browser.getTitle()).toContain('Sign in');
                });
        });
    });

    describe('on list views', () => {
        beforeAll(done => {
            loginPage.loginWithAdmin().then(done);
        });

        afterAll(done => {
            logoutPage.load()
                .then(done);
        });

        it('Personal Files page - [C217157]', () => {
            const label = SIDEBAR_LABELS.PERSONAL_FILES;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });

        it('File Libraries page - [C217158]', () => {
            const label = SIDEBAR_LABELS.FILE_LIBRARIES;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });

        it('Shared Files page - [C217159]', () => {
            const label = SIDEBAR_LABELS.SHARED_FILES;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });

        it('Recent Files page - [C217160]', () => {
            const label = SIDEBAR_LABELS.RECENT_FILES;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });

        it('Favorites page - [C217161]', () => {
            const label = SIDEBAR_LABELS.FAVORITES;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });

        it('Trash page - [C217162]', () => {
            const label = SIDEBAR_LABELS.TRASH;

            page.sidenav.navigateToLinkByLabel(label)
                .then(() => {
                    expect(browser.getTitle()).toContain(label);
                });
        });
    });
});
