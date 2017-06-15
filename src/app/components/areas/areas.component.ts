import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.sass']
})
export class AreasComponent implements OnInit {

  constructor(private router: Router) { }

  articles = [
    {
      'id': 1,
      'name': 'Settore-Privato',
      'title': 'Settore Privato',
      'url': '../.../../assets/images/settore-privato.png',
      'subtitle': 'Case, condomini, cantine, servizi igienici, impianti di climatizzazione, auto, camion, camper',
      'intro': 'L’inquinamento dell’aria non riguarda soltanto gli ambienti esterni ma coinvolge anche l’ambiente domestico. Polveri sottili, fumo di sigaretta, spray, allergeni sono soltanto alcune delle sostanze nocive che inquinano quotidianamente la nostra casa.'
    },
     {
      'id': 2,
      'name': 'Settore-Pubblico',
      'title': 'Settore Pubblico',
      'url': '../.../../assets/images/settore-pubblico.png',
      'subtitle': 'L’ozono è un potente disinfettante ecologico, in grado di eliminare virus, batteri, funghi, muffe, odori, residui tossici e nocivi organici ed inorganici. Sterilizza l’aria, le superfici e gli oggetti presenti nell’ambiente trattato.',
      'intro': 'L’ozono è un potente disinfettante ecologico, in grado di eliminare virus, batteri, funghi, muffe, odori, residui tossici e nocivi organici ed inorganici. Sterilizza l’aria, le superfici e gli oggetti presenti nell’ambiente trattato.'
  },
     {
      'id': 3,
      'name': 'Settore-Sanitario',
      'title': 'Settore Sanitario',
      'url': '../.../../assets/images/settore-sanitario.png',
      'subtitle': 'Ospedali, sale degenza, sale operatorie, poliambulatori, studi medici e dentistici, studi veterinari',
      'intro': 'Nel settore medico l’igiene degli ambienti e delle strumentazioni è necessario e fondamentale per evitare la diffusione di malattie e garantire una sicurezza igienico-sanitaria al paziente e al personale sanitario.'
    },
     {
      'id': 4,
      'name': 'Settore-Sportivo',
      'title': 'Settore Sportivo',
      'url': '../.../../assets/images/settore-sportivo.png',
      'subtitle': 'Palestre, saune, solarium, piscine, spogliatoi',
      'intro': 'In ambienti dove vengono svolte attività fisiche e si concentrano un elevato numero di persone, risulta fondamentale l’utilizzo di un generatore di Ozono. L’ozono essendo un potente disinfettante ecologico è in grado di eliminare virus, batteri, funghi, muffe ed eventuali odori presenti, rendendo un ambiente pulito, sanificato ed ossigenato.'
    },
     {
      'id': 5,
      'name': 'Settore-Produttivo',
      'title': 'Settore Produttivo',
      'url': '../.../../assets/images/settore-produttivo.png',
      'subtitle': 'Mense, industrie alimentari, conserviere, panifici, laboratori artigianali dolciari e gelaterie, macelli, allevamenti e stalle',
      'intro': 'Il trattamento e la conservazione di formaggi richiede un tasso di umidità elevato che rende il formaggio e gli ambienti di conservazione, particolarmente soggetti alla formazione di muffa.'
    }
  ]

  ngOnInit() {
  }

  onSelect(article){
    this.router.navigate(['/ambito', article.name]);
  }
}
