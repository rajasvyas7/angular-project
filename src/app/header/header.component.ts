import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    collapsed = true;
    @Output() menuSelected = new EventEmitter<string>();

    // onRecipesClick() {
    //     this.menuSelected.emit('Recipes');
    // }
    // onShoppingListClick() {
    //     this.menuSelected.emit('ShoppingList');
    // }
    /** Using a single function instead of the above to commented functions */
    onMenuClick(selectedMenu: string) {
        this.menuSelected.emit(selectedMenu);
    }


}