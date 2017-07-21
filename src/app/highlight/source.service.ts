import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SourceFile } from './source-file';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SourceService {

  constructor(private http: Http) { }

  public fetch(source: SourceFile): Observable<SourceFile> {
    return this.http.get(source.content)
                    .map(resp => resp.text())
                    .map(text => new SourceFile(source.lang, text));
  }
}
