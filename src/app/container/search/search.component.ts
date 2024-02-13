import { Component,Output ,EventEmitter,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchText:string="";

    

  //1 : Create an event
  @Output()
  SearchTextChanged:EventEmitter<string>=new EventEmitter<string>();
   
  onSearchTextChanged(){
    
  }
 
  //2nd argument of @Viewchild is optional
  //1:read:   use it is to read the difference token from the queried element.
  //2:Static: Determines when the query is resolved.
  // true is when the view is initialized (before the first change detection) for the first time.
  // false if you want it to be resolved after every change detection.
  @ViewChild("searchInput") searchInputEL : ElementRef
  // setSearchText(){

  // }
  updateSearchText( ){
    //  this.searchText=event.target.value;
    // console.log(inputEL.value);
    this.searchText=this.searchInputEL.nativeElement.value;   
    this.SearchTextChanged.emit(this.searchText);     
  }
}
