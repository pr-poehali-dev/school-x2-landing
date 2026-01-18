import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/8102d0f0-1650-44d5-bb71-2cfda5f66ca4/files/c1273479-9793-4eff-a700-2ab2475a1f8b.jpg',
      title: 'Учебная аудитория'
    },
    {
      url: 'https://cdn.poehali.dev/projects/8102d0f0-1650-44d5-bb71-2cfda5f66ca4/files/439f26eb-a2c6-44e5-8015-c89ff65c441b.jpg',
      title: 'Зона для самостоятельных занятий'
    },
    {
      url: 'https://cdn.poehali.dev/projects/8102d0f0-1650-44d5-bb71-2cfda5f66ca4/files/85137499-19a5-438d-9060-ee529b343f4c.jpg',
      title: 'Лекционный зал'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Школа х2
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О курсе</a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#program" className="text-sm font-medium hover:text-primary transition-colors">Программа</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#enrollment">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Удвой свои знания по высшей математике
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Групповые курсы для студентов и абитуриентов. Современный подход к обучению, опытные преподаватели и гарантированный результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <a href="#enrollment">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Записаться на курс
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#program">
                  <Icon name="BookOpen" className="mr-2" size={20} />
                  Посмотреть программу
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              О курсе высшей математики
            </h2>
            <p className="text-muted-foreground text-lg">
              Наш курс разработан для тех, кто хочет глубоко понять высшую математику и применять её на практике
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Малые группы</CardTitle>
                <CardDescription>До 9 человек в группе для максимальной эффективности обучения</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={24} className="text-secondary" />
                </div>
                <CardTitle>Гибкий график</CardTitle>
                <CardDescription>
                  Занятия 2-3 раза в неделю с возможностью выбора удобного времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={24} className="text-accent" />
                </div>
                <CardTitle>Результат</CardTitle>
                <CardDescription>
                  95% студентов успешно сдают экзамены после прохождения курса
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Преимущества обучения
            </h2>
            <p className="text-muted-foreground text-lg">
              Почему студенты выбирают именно нашу школу
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'Brain', title: 'Глубокое понимание', description: 'Не заучивание формул, а понимание принципов и логики математики' },
              { icon: 'Lightbulb', title: 'Практический подход', description: 'Решение реальных задач и применение знаний на практике' },
              { icon: 'MessageCircle', title: 'Обратная связь', description: 'Индивидуальный разбор ошибок и персональные рекомендации' },
              { icon: 'Clock', title: 'Экономия времени', description: 'Эффективная методика позволяет освоить материал в 2 раза быстрее' },
              { icon: 'Target', title: 'Подготовка к экзаменам', description: 'Специальные занятия по подготовке к ЕГЭ и вступительным экзаменам' },
              { icon: 'BookOpen', title: 'Материалы курса', description: 'Доступ к методическим материалам и записям занятий навсегда' },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name={benefit.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Программа обучения
            </h2>
            <p className="text-muted-foreground text-lg">
              Структурированный курс от основ до продвинутых тем
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                    <span className="font-heading font-semibold">Математический анализ</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Пределы и непрерывность функций</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Дифференциальное исчисление</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Интегральное исчисление</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Ряды и их сходимость</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold">2</div>
                    <span className="font-heading font-semibold">Линейная алгебра</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Векторы и матрицы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Системы линейных уравнений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Определители и их свойства</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>Собственные векторы и значения</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">3</div>
                    <span className="font-heading font-semibold">Дифференциальные уравнения</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Обыкновенные дифференциальные уравнения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Методы решения ДУ первого порядка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Линейные ДУ высших порядков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Системы дифференциальных уравнений</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                    <span className="font-heading font-semibold">Теория вероятностей и статистика</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Основы комбинаторики</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Случайные события и вероятности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Случайные величины и распределения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Математическая статистика</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Наши преподаватели
            </h2>
            <p className="text-muted-foreground text-lg">
              Опытные педагоги с научными степенями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Анна Петровна Смирнова',
                degree: 'Кандидат физико-математических наук',
                experience: '15 лет преподавательского стажа',
                specialization: 'Математический анализ, Дифференциальные уравнения'
              },
              {
                name: 'Михаил Иванович Козлов',
                degree: 'Доктор физико-математических наук',
                experience: '20 лет преподавательского стажа',
                specialization: 'Линейная алгебра, Аналитическая геометрия'
              },
              {
                name: 'Елена Сергеевна Волкова',
                degree: 'Кандидат физико-математических наук',
                experience: '12 лет преподавательского стажа',
                specialization: 'Теория вероятностей, Математическая статистика'
              }
            ].map((teacher, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name="GraduationCap" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-center font-heading text-xl">{teacher.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <p className="text-sm font-medium text-primary">{teacher.degree}</p>
                  <p className="text-sm text-muted-foreground">{teacher.experience}</p>
                  <p className="text-sm text-muted-foreground pt-2 border-t">{teacher.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Наши учебные помещения
            </h2>
            <p className="text-muted-foreground text-lg">
              Современные и комфортные классы для эффективного обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-heading font-semibold">{image.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Тарифы и стоимость
            </h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий вариант обучения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '12 000',
                period: 'месяц',
                features: [
                  '8 занятий в месяц',
                  'Доступ к материалам курса',
                  'Домашние задания с проверкой',
                  'Общий чат с преподавателем'
                ],
                popular: false
              },
              {
                name: 'Стандарт',
                price: '18 000',
                period: 'месяц',
                features: [
                  '12 занятий в месяц',
                  'Доступ к материалам курса',
                  'Домашние задания с проверкой',
                  'Индивидуальные консультации',
                  'Записи всех занятий',
                  'Дополнительные материалы'
                ],
                popular: true
              },
              {
                name: 'Премиум',
                price: '25 000',
                period: 'месяц',
                features: [
                  '16 занятий в месяц',
                  'Доступ к материалам курса',
                  'Домашние задания с проверкой',
                  'Индивидуальные консультации',
                  'Записи всех занятий',
                  'Дополнительные материалы',
                  'Персональный куратор',
                  'Подготовка к экзаменам'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all hover:-translate-y-2 ${plan.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="font-heading text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold font-heading">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`} asChild>
                    <a href="#enrollment">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="enrollment" className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Записаться на курс
              </h2>
              <p className="text-muted-foreground text-lg">
                Заполните форму и мы свяжемся с вами в течение 24 часов
              </p>
            </div>

            <Card className="shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="example@mail.ru"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о ваших целях обучения, уровне подготовки..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-primary via-secondary to-accent">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Контактная информация
            </h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Ломоносова, д. 15</p>
                <p className="text-sm text-muted-foreground mt-2">м. Университет</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Пн-Пт: 9:00 - 20:00</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-accent" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@schoolx2.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение дня</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-heading text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Школа х2
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Школа х2. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}