import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../_services/search.service';
import { Article } from '../_models/Article';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    showIndeterminateProgressBar = false;
    isAdvancedSearch = false;
    recentlyViewedArticles: Article[] = [];
    searchResults: Article[] = [];
    ministryList: string[] = [];
    filteredArticles: Article[] = [];
    currentFilter: string;
    searchTerm: string;
    searchSuggestions: string[] = [];

    constructor(
        private router: Router,
        private searchService: SearchService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.searchSuggestions = data['searchSuggestions'];
            this.recentlyViewedArticles = data['recentlyViewedArticles'];
          });
    }

    doSearch(event: any): void {
        this.searchResults = [];
        this.ministryList = [];
        this.showIndeterminateProgressBar = true;
        this.searchService.getSearchResults(this.searchTerm).subscribe(results => {
            this.searchResults = results;
            // keep a copy of the search results so we can populate the UI with the original results when all filters have been removed
            this.filteredArticles = this.searchResults;
            this.showIndeterminateProgressBar = false;
            this.getMinistries(results);
        });
    }

    getMinistries(articles: Article[]): void {
        articles.forEach((val, idx) => {

            const ministryIsInList = this.ministryList.indexOf(val.ministry) > -1;

            if (!ministryIsInList) {
                this.ministryList.push(articles[idx].ministry);
            }
        });
    }

    filterSearchResultsByMinistry(event: any): void {
        const selectedMinistry = event.target.textContent;

        // a second click on the currently selected ministry clears the filter and shows all search results
        if (selectedMinistry === this.currentFilter) {
            this.currentFilter = '';
            this.filteredArticles = this.searchResults;
            return;
        }

        this.currentFilter = selectedMinistry;
        this.filteredArticles = this.searchResults.filter(article => article.ministry === selectedMinistry);
    }

    showAdvancedSearch(): void {
        this.isAdvancedSearch = !this.isAdvancedSearch;
    }

    cancelAdvancedSearch(): void {
        // this method only exists for clarity when the user cancels out of advanced search
        // we could use the method above but this is a better name for the action in the UI
        this.isAdvancedSearch = false;
    }

}
