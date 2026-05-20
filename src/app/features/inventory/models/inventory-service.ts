import { Injectable, signal } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  list: Item[] = [
    {
      title: 'En-cas',
      description: 'Récupérez immédiatement 3 PV.',
      img_url: './sprites/en-cas.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Repas',
      description: 'Récupérez immédiatement 6 PV.',
      img_url: './sprites/repas.png',
      price: 6,
      chance_of_appearing: 50,
      interaction: {},
    },
    {
      title: 'Festin',
      description: 'Récupérez immédiatement 9 PV.',
      img_url: './sprites/festin.png',
      price: 3,
      chance_of_appearing: 10,
      interaction: {},
    },
    {
      title: "Élixir d'endurance",
      description: 'Augmentez de 1 votre limite de PV jusqu’à la fin du donjon.',
      img_url: './sprites/elixir-endurance.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Parieur',
      description: 'Lancez immédiatement le dé : sur 4+, gagnez 20 pièces.',
      img_url: './sprites/parieur.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Crésus',
      description: 'Au prochain étage, doublez les pièces et les trésors gagnés.',
      img_url: './sprites/cresus.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Gringalets',
      description: 'Au prochain étage, considérez que tous les ennemis ont 1 PV.',
      img_url: './sprites/gringalets.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Bouclier magique',
      description: 'Au prochain étage, les ennemis ne vous font perdre aucun PV. En avant !',
      img_url: './sprites/bouclier-magique.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Passe-muraille',
      description: 'Traversez un mur qui vous bloque le passage.',
      img_url: './sprites/passe-muraille.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Téléparchemin',
      description: "Téléportez-vous sur n'importe quelle case à cet étage.",
      img_url: './sprites/teleparchemin.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Parchemulligan',
      description: 'Relancez une fois le dé.',
      img_url: './sprites/parchemulligan.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
    {
      title: 'Doublélixir',
      description: 'Doublez le résultat du dé.',
      img_url: './sprites/doublelixir.png',
      price: 3,
      chance_of_appearing: 80,
      interaction: {},
    },
  ];

  current = signal<Item[]>([]);

  add(item: Item): void {
    this.current.update((list) => [...list, item]);
  }

  delete(index: number): void {
    this.current.update((list) => {
      return list.splice(index, 1);
    });
  }
}
