import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { AuthorsService } from '../service/authors.service';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css'],
  standalone: true,
  imports: [FormsModule]  // Add FormsModule here
})
export class AuthorSearchComponent {
  authorId: number = 0;
  author: any;
  errorMessage: string | null = null;

  constructor(private authorsService: AuthorsService) {}

  onSearch() {
    this.authorsService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.author = data;
        this.errorMessage = null;
      },
      error: () => {
        this.errorMessage = 'Author not found';
        this.author = null;
      }
    });
  }
}
