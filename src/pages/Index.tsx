import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Painting {
  id: number;
  title: string;
  artist: string;
  year: string;
  price: string;
  style: string;
  technique: string;
  image: string;
  description: string;
}

interface Artist {
  id: number;
  name: string;
  bio: string;
  specialty: string;
  works: number;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: 'Портрет дамы',
    artist: 'Анна Иванова',
    year: '2023',
    price: '450 000 ₽',
    style: 'Романтизм',
    technique: 'Масло',
    image: 'https://cdn.poehali.dev/projects/3d65ffa7-db2c-43e5-a742-07f70c4b8196/files/644934eb-7246-424a-85be-bd2afbb43a7c.jpg',
    description: 'Элегантный портрет в стиле классической живописи XIX века'
  },
  {
    id: 2,
    title: 'Абстрактная композиция',
    artist: 'Дмитрий Соколов',
    year: '2024',
    price: '320 000 ₽',
    style: 'Абстракционизм',
    technique: 'Акрил',
    image: 'https://cdn.poehali.dev/projects/3d65ffa7-db2c-43e5-a742-07f70c4b8196/files/e3c7039a-7dcb-4f80-aa77-70a07f588d07.jpg',
    description: 'Современная абстракция с яркими геометрическими формами'
  },
  {
    id: 3,
    title: 'Летний пейзаж',
    artist: 'Мария Петрова',
    year: '2023',
    price: '280 000 ₽',
    style: 'Импрессионизм',
    technique: 'Масло',
    image: 'https://cdn.poehali.dev/projects/3d65ffa7-db2c-43e5-a742-07f70c4b8196/files/d3b67931-609e-4731-95e9-78f2d4c39134.jpg',
    description: 'Пасторальная сцена в импрессионистской манере'
  }
];

const artists: Artist[] = [
  {
    id: 1,
    name: 'Анна Иванова',
    bio: 'Художник-портретист с 15-летним опытом работы в классической технике',
    specialty: 'Портреты, Романтизм',
    works: 12
  },
  {
    id: 2,
    name: 'Дмитрий Соколов',
    bio: 'Современный художник, работающий в направлении абстрактного экспрессионизма',
    specialty: 'Абстракция',
    works: 8
  },
  {
    id: 3,
    name: 'Мария Петрова',
    bio: 'Мастер пейзажной живописи, последователь импрессионистской школы',
    specialty: 'Пейзажи',
    works: 15
  }
];

const Index = () => {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [styleFilter, setStyleFilter] = useState<string>('Все');
  const [techniqueFilter, setTechniqueFilter] = useState<string>('Все');
  const [artistFilter, setArtistFilter] = useState<string>('Все');

  const styles = ['Все', 'Романтизм', 'Абстракционизм', 'Импрессионизм'];
  const techniques = ['Все', 'Масло', 'Акрил', 'Акварель'];
  const artistNames = ['Все', ...artists.map(a => a.name)];

  const filteredPaintings = paintings.filter(p => {
    return (
      (styleFilter === 'Все' || p.style === styleFilter) &&
      (techniqueFilter === 'Все' || p.technique === techniqueFilter) &&
      (artistFilter === 'Все' || p.artist === artistFilter)
    );
  });

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Галерея Искусств</h1>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
                Главная
              </a>
              <a href="#gallery" className="text-sm font-medium hover:text-accent transition-colors">
                Галерея
              </a>
              <a href="#artists" className="text-sm font-medium hover:text-accent transition-colors">
                Художники
              </a>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Коллекция изысканных произведений искусства
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя уникальные работы современных мастеров и классиков живописи
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="animate-scale-in">
              <Icon name="Palette" size={20} className="mr-2" />
              Смотреть галерею
            </Button>
            <Button size="lg" variant="outline" className="animate-scale-in">
              <Icon name="Users" size={20} className="mr-2" />
              О художниках
            </Button>
          </div>
        </div>
      </section>

      <Tabs defaultValue="gallery" className="container mx-auto px-4 py-12 max-w-7xl">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="gallery">Галерея</TabsTrigger>
          <TabsTrigger value="artists">Художники</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" id="gallery">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6">Фильтры</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Стиль</label>
                <div className="flex flex-wrap gap-2">
                  {styles.map(style => (
                    <Badge
                      key={style}
                      variant={styleFilter === style ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setStyleFilter(style)}
                    >
                      {style}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Техника</label>
                <div className="flex flex-wrap gap-2">
                  {techniques.map(tech => (
                    <Badge
                      key={tech}
                      variant={techniqueFilter === tech ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setTechniqueFilter(tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Художник</label>
                <div className="flex flex-wrap gap-2">
                  {artistNames.map(artist => (
                    <Badge
                      key={artist}
                      variant={artistFilter === artist ? 'default' : 'outline'}
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setArtistFilter(artist)}
                    >
                      {artist}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaintings.map(painting => (
              <Card
                key={painting.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in"
                onClick={() => setSelectedPainting(painting)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{painting.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{painting.artist}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Badge variant="secondary">{painting.style}</Badge>
                      <Badge variant="outline">{painting.technique}</Badge>
                    </div>
                    <span className="text-lg font-bold text-accent">{painting.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPaintings.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Картины с выбранными фильтрами не найдены</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="artists" id="artists">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map(artist => (
              <Card key={artist.id} className="hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={32} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
                      <p className="text-sm text-muted-foreground">{artist.specialty}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4">{artist.bio}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Работ в галерее:</span>
                    <Badge>{artist.works}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={!!selectedPainting} onOpenChange={() => setSelectedPainting(null)}>
        <DialogContent className="max-w-3xl">
          {selectedPainting && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedPainting.title}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedPainting.image}
                  alt={selectedPainting.title}
                  className="w-full rounded-lg"
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Художник</h4>
                    <p className="text-lg">{selectedPainting.artist}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Описание</h4>
                    <p>{selectedPainting.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Стиль</h4>
                      <Badge>{selectedPainting.style}</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Техника</h4>
                      <Badge variant="outline">{selectedPainting.technique}</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Год создания</h4>
                    <p>{selectedPainting.year}</p>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-accent">{selectedPainting.price}</span>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t mt-20 py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Галерея Искусств</h3>
              <p className="text-sm text-muted-foreground">
                Премиальная коллекция произведений современных и классических художников
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  gallery@art.com
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <p className="text-sm text-muted-foreground">
                Вт–Вс: 11:00 – 20:00<br />
                Пн: выходной
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;