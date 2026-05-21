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
      interaction: {
        coinLost: true,
        coins: 3,
        heroHeal: true,
        health: 3,
      },
      bought: false,
    },
    {
      title: 'Repas',
      description: 'Récupérez immédiatement 6 PV.',
      img_url: './sprites/repas.png',
      price: 6,
      chance_of_appearing: 50,
      interaction: {
        coinLost: true,
        coins: 6,
        heroHeal: true,
        health: 6,
      },
      bought: false,
    },
    {
      title: 'Festin',
      description: 'Récupérez immédiatement 9 PV.',
      img_url: './sprites/festin.png',
      price: 9,
      chance_of_appearing: 10,
      interaction: {
        coinLost: true,
        coins: 9,
        heroHeal: true,
        health: 9,
      },
      bought: false,
    },
    {
      title: "Élixir d'endurance",
      description: 'Augmentez de 1 votre limite de PV jusqu’à la fin du donjon.',
      img_url: './sprites/elixir-endurance.png',
      price: 8,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Parieur',
      description: 'Lancez immédiatement le dé : sur 4+, gagnez 20 pièces.',
      img_url: './sprites/parieur.png',
      price: 16,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Crésus',
      description: 'Au prochain étage, doublez les pièces et les trésors gagnés.',
      img_url: './sprites/cresus.png',
      price: 20,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Gringalets',
      description: 'Au prochain étage, considérez que tous les ennemis ont 1 PV.',
      img_url: './sprites/gringalets.png',
      price: 10,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Bouclier magique',
      description: 'Au prochain étage, les ennemis ne vous font perdre aucun PV. En avant !',
      img_url: './sprites/bouclier-magique.png',
      price: 12,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Passe-muraille',
      description: 'Traversez un mur qui vous bloque le passage.',
      img_url: './sprites/passe-muraille.png',
      price: 15,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Téléparchemin',
      description: "Téléportez-vous sur n'importe quelle case à cet étage.",
      img_url: './sprites/teleparchemin.png',
      price: 25,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Parchemulligan',
      description: 'Relancez une fois le dé.',
      img_url: './sprites/parchemulligan.png',
      price: 18,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
    },
    {
      title: 'Doublélixir',
      description: 'Doublez le résultat du dé.',
      img_url: './sprites/doublelixir.png',
      price: 20,
      chance_of_appearing: 80,
      interaction: {},
      bought: false,
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
