import {Component, OnInit} from '@angular/core';

import {Project} from './project.model';

import {ProjectsService} from './projects.service';
import {creatingProjectState, projectListStateTrigger, selectedState} from '../animations/project.animations';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [selectedState, creatingProjectState, projectListStateTrigger]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {
  }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length > 0) {
            this.displayedProjects.push(this.projects[0]);
            let i = 1;
            const interval = setInterval(() => {
              if (this.projects[i]) {
                this.displayedProjects.push(this.projects[i]);
                i++;
              } else {
                clearInterval(interval);
                this.projects = this.displayedProjects;
              }
            }, 100);
          }
        }
      );
  }

  onItemAnimated(animationEvent: AnimationEvent, i: number) {
    // if (animationEvent.fromState != 'void') return;
    // if (this.projects[i]) this.displayedProjects.push(this.projects[i]);
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    setTimeout(() => {
      this.projects.push(project);
    }, 300);
  }
}
