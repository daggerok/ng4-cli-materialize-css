import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
//
import { SourceService } from './source.service';
import { SourceFile } from './source-file';
import { HighlightJsService } from 'angular2-highlight-js';
//
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styles: [`
    .left-align {
      padding: 1%;
    }
  `],
})
export class HighlightComponent implements OnInit, AfterViewChecked {

  private baseUrl = 'https://raw.githubusercontent.com/daggerok/learn-jvm/master/spring-boot';

  public db = [
    new SourceFile('groovy', `${this.baseUrl}/groovy/src/main/groovy/daggerok/GroovyWebApplication.groovy`),
    new SourceFile('java', `${this.baseUrl}/java/src/main/java/daggerok/JavaWebApplication.java`),
    new SourceFile('kotlin', `${this.baseUrl}/kotlin/src/main/kotlin/daggerok/KotlinWebApplication.kt`),
    new SourceFile('scala', `${this.baseUrl}/scala/src/main/scala/daggerok/ScalaWebApplication.scala`),
  ];

  public sourceFiles: SourceFile[] = [];

  constructor(
    private elementRef: ElementRef,
    private sourceService: SourceService,
    private highlightJsService: HighlightJsService,
  ) { }

  ngOnInit(): void {
    this.db.forEach(source => this.sourceService.fetch(source)
           .subscribe(sourceFile => this.sourceFiles.push(sourceFile)));
  }

  ngAfterViewChecked(): void {
    this.sourceFiles.forEach(file => this.highlight(`.${file.lang}`));
  }

  private highlight(selector: string) {
    this.highlightJsService.highlight(
      this.$(selector)
    );
  }

  private $(selector: string) {
    return this.elementRef.nativeElement.querySelector(selector);
  }
}
