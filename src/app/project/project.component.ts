import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Project} from '../projects/project.model';
import {statusChanged} from '../animations/project.animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [statusChanged]
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();
  @Input() selected = false;

  constructor() {
  }

  ngOnInit() {
  }

  onUpdateStatus(newStatus: string) {
    this.statusUpdated.emit(newStatus);
  }

  onDelete() {
    this.projectDeleted.emit();
  }
}
