// src/data/blogData.ts

export interface BlogPost {
  id: number
  title: string
  summary: string
  slug: string
  content: string
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: 'React ile Performans Optimizasyonu',
    summary: 'React uygulamalarınızı daha hızlı hale getirmenin yollarını keşfedin.',
    slug: 'react-performans-optimizasyonu',
    content: `
React projelerinde performansı artırmak için birçok yöntem vardır. Bunlardan bazıları şunlardır:

- **React.memo**: Pure component yaparak gereksiz renderları engeller.
- **useMemo & useCallback**: Fonksiyonların ve hesaplamaların tekrar tekrar oluşturulmasını engeller.
- **Code Splitting**: React.lazy ve Suspense ile sayfa bazlı yükleme.
- **Sanal Listeleme**: Büyük listeleri sanallaştırmak için react-window veya react-virtualized kullanımı.
- **State yönetimi optimizasyonu**: Gereksiz prop drilling'den kaçının, context ve redux gibi yapıları dikkatli kullanın.

Performans izleme araçları olarak Chrome DevTools, React DevTools, Lighthouse kullanılabilir.
    `,
  },
  {
    id: 2,
    title: 'TypeScript ile Daha Güvenli Kod',
    summary: 'JavaScript’in ötesine geçerek daha güvenli ve sürdürülebilir kod yazın.',
    slug: 'typescript-ile-guvenli-kod',
    content: `
TypeScript, JavaScript'e statik tip desteği getirerek büyük projelerde daha güvenli ve okunabilir kod yazmamıza olanak sağlar.

### Avantajları
- **Tip kontrolü**: Derleme zamanında hataları yakalar.
- **Gelişmiş IDE desteği**: Otomatik tamamlama, refactor kolaylığı.
- **Kodun kendini belgelemesi**: Daha anlaşılır fonksiyon ve değişken tanımlamaları.

### Kullanım Örnekleri
\`\`\`ts
interface User {
  name: string
  age: number
}

const greet = (user: User) => {
  return \`Merhaba, \${user.name}\`
}
\`\`\`

JavaScript dosyalarını \`.ts\` veya \`.tsx\` uzantısına çevirerek kolayca TypeScript'e geçiş yapılabilir.
    `,
  },
  {
    id: 3,
    title: 'Tailwind CSS ile Modern Arayüzler',
    summary: 'Tailwind CSS ile etkileyici ve responsive arayüzler nasıl tasarlanır?',
    slug: 'tailwind-css-modern-arayuzler',
    content: `
Tailwind CSS, utility-first bir CSS framework'üdür. Hızlı prototipleme ve modern arayüz geliştirme sürecini oldukça hızlandırır.

### Temel Özellikler
- **Responsive tasarım**: md:, lg: gibi breakpoint'ler ile kolay responsive yapı.
- **Dark mode desteği**: dark: prefix ile temaya özel stil tanımlamaları.
- **Custom theme**: tailwind.config.js ile özel renk ve font tanımı.

### Örnek
\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Kaydet
</button>
\`\`\`

Tailwind, projelerde CSS yazmadan modern UI'lar oluşturmak için oldukça kullanışlıdır.
    `,
  },
  {
    id: 4,
    title: 'Frontend Dünyasında Yeni Trendler',
    summary: 'Güncel frontend trendlerini ve yükselen teknolojileri inceleyin.',
    slug: 'frontend-yeni-trendler',
    content: `
2025 yılına girerken frontend dünyasında öne çıkan trendler şunlar:

### 1. Server Components (React)
React 19 ile birlikte gelen Server Components mimarisi, performansı ve geliştirici deneyimini üst seviyeye taşıyor.

### 2. Islands Architecture
Astro, Qwik gibi framework’lerle birlikte sadece ihtiyaç duyulan alanlar JavaScript ile interaktif hale getiriliyor.

### 3. Yeni Framework’ler
- **Remix**: Nested routes ve loader yapısı ile veri yönetimi kolaylığı.
- **SvelteKit**: Daha az JS, daha hızlı uygulamalar.
- **Next.js 15**: App Router, Server Actions gibi yeni API'lerle güçlendi.

### 4. Tasarım Trendleri
- Cam efekti (glassmorphism)
- Dark mode zorunluluğu
- Motion UI (Framer Motion ile animasyonlu arayüzler)

Gelişmeleri takip ederek projelerde rekabet gücü sağlanabilir.
    `,
  },
]
