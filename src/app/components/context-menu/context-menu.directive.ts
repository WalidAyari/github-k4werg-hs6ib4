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

import { Directive, HostListener, Input } from '@angular/core';
import { ContextMenuOverlayRef } from './context-menu-overlay';
import { ContextMenuService } from './context-menu.service';

@Directive({
    selector: '[acaContextActions]'
})
export class ContextActionsDirective {
    private overlayRef: ContextMenuOverlayRef = null;

    // tslint:disable-next-line:no-input-rename
    @Input('acaContextEnable') enabled: boolean;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event && this.overlayRef) {
            this.overlayRef.close();
        }
    }

    @HostListener('contextmenu', ['$event'])
    onContextMenuEvent(event: MouseEvent) {
        if (event) {
            event.preventDefault();

            if (this.enabled) {
                this.render(event);
            }
        }
    }

    constructor(private contextMenuService: ContextMenuService) { }

    private render(event: MouseEvent) {
        this.overlayRef = this.contextMenuService.open({
            source: event,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            panelClass: 'cdk-overlay-pane',
        });
    }
}
