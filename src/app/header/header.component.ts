import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: []
})
export class HeaderComponent {
	@Output() selectedTab = new EventEmitter<string>();

	onSelect(selected: string) {
		this.selectedTab.emit(selected);
	}

}