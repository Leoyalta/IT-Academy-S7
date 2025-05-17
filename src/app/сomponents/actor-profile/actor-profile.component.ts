import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorServiceService } from '../../services/actors-service/actors-service.service';
import { ActorDetails } from '../../models/actors';

@Component({
  selector: 'app-actor-profile',
  templateUrl: './actor-profile.component.html',
  styleUrl: './actor-profile.component.scss',
})
export class ActorProfileComponent implements OnInit {
  actorId: string | null = null;
  actor: ActorDetails | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.actorId = params.get('id');
      if (this.actorId) {
        this.loadActor(+this.actorId);
      }
    });
  }

  loadActor(id: number): void {
    this.actorService.getActorById(id).subscribe((data) => {
      if ('error' in data) {
        this.errorMessage = data.error;
      } else {
        this.actor = data;
        console.log(this.actor);
      }
    });
  }
}
