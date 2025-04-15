export const blogData = [
  {
    id:1,
    slug: 'react-performans',
    title: 'React ile Performans Optimizasyonu',
    author: 'Burhan Sağlık',
    date: '14 Nisan 2025',
    coverImage: '../images/optimization.jpg', // Görseli güncellediğimizden emin ol
    content: `
### 🚀 Giriş

React uygulamalarında **performans**, kullanıcı deneyimi açısından kritik bir rol oynar. **Daha hızlı**, **daha verimli** ve **daha optimize edilmiş** React uygulamaları oluşturmak, hem kullanıcı memnuniyetini artırmak hem de SEO açısından büyük önem taşır.

Bu yazıda, React projelerinizde performansı nasıl optimize edebileceğinizi, hangi tekniklerin işinize yarayacağını ve kullanabileceğiniz araçları keşfedeceğiz.

---

### 📌 Temel Performans İyileştirme Teknikleri

#### 1. Memoization (Yinelemeli Hesaplama Engelleme)

React, bileşenlerini her render ettiğinde tüm alt bileşenlerini de yeniden render eder. Ancak bazı bileşenlerin sadece veri değiştiğinde yeniden render edilmesi gerekir. Bu durumda **memoization** (yinelemeli hesaplama engelleme) yardımcı olabilir. Örneğin, "React.memo" kullanarak:

\`\`\`tsx
const MemoizedComponent = React.memo(MyComponent)
\`\`\`

Memoization sayesinde yalnızca verilerin değiştiği bileşenler render edilir, böylece gereksiz render işlemleri engellenir.

#### 2. useCallback ve useMemo

"useCallback" ve "useMemo" hook'ları, fonksiyon referanslarının ve hesaplanan değerlerin yeniden hesaplanmasını engellemek için kullanılır. Özellikle yüksek performans gerektiren işlemler için idealdir.

\`\`\`tsx
const memoizedCallback = useCallback(() => {
  console.log('Function Called');
}, [dependencyArray]);
\`\`\`

\`\`\`tsx
const computedValue = useMemo(() => expensiveCalculation(data), [data]);
\`\`\`

#### 3. Lazy Loading (Tembel Yükleme)

**Lazy loading**, yalnızca ihtiyaç duyulan bileşenlerin yüklenmesini sağlar. Bu sayede başlangıçtaki yükleme süresi hızlanır.

\`\`\`tsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'))
\`\`\`

Lazy loading sayesinde uygulama başlangıcında yalnızca gerekli bileşenler yüklenir. Diğer bileşenler kullanıcının etkileşimi ile yüklenir.

#### 4. Virtualization (Sanallaştırma)

Veri listeleme gibi büyük veri setlerini göstermek için **virtualization** kullanarak yalnızca görünür öğeleri render edebiliriz. Bu, bellek ve render sürelerini optimize eder.

\`\`\`tsx
import { List } from 'react-window';

const MyList = () => (
  <List
    height={400}
    itemCount={1000}
    itemSize={35}
    width={300}
  >
    {({ index, style }) => <div style={style}>{}</div>}
  </List>
);
\`\`\`

---

### 📊 Performans Araçları

Performans iyileştirmeleri yaparken kullanabileceğiniz bazı araçlar:

- **React DevTools Profiler**: Uygulamanızın render süreçlerini analiz eder ve hangi bileşenlerin en fazla kaynak tükettiğini gösterir.
- **Lighthouse**: Google'ın geliştirdiği açık kaynaklı bir araçtır. Web uygulamalarının performansını ve SEO uyumluluğunu test eder.
- **Web Vitals**: Web Vitals, kullanıcı deneyimini ölçen önemli metrikleri takip etmenizi sağlar. Bu verilerle site performansınızı optimize edebilirsiniz.

---

### 🛠 Performans Test Etme

Performans iyileştirmelerini yapmadan önce, mevcut uygulamanızın performansını test etmek oldukça önemlidir. **Lighthouse** veya **Web Vitals** gibi araçlarla uygulamanızın performansını test edebilir, ardından optimizasyonları gerçekleştirebilirsiniz.

---

### ✅ Sonuç

Performans iyileştirmeleri sadece kullanıcı deneyimini geliştirmekle kalmaz, aynı zamanda SEO sıralamalarını ve uygulamanızın erişilebilirliğini de artırır. Küçük adımlar büyük farklar yaratabilir!

Daha fazla performans önerisi ve teknik bilgi için [React Documentation](https://reactjs.org/docs/optimizing-performance.html) ve [Web Vitals](https://web.dev/vitals/) kaynaklarına göz atabilirsiniz.

---

### 📚 Kaynaklar

- [React Memoization](https://reactjs.org/docs/react-api.html#reactmemo)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
    `
  },
  {
    id:2,
    slug: 'react-state-management',
    title: 'React ile State Yönetimi',
    author: 'Burhan Sağlık',
    date: '20 Nisan 2025',
    coverImage: '../images/state-management.jpg',
    content: `
### 🚀 Giriş

React uygulamalarında **state yönetimi** önemli bir konudur. Bu yazıda, React'ta state yönetimini doğru bir şekilde nasıl uygulayabileceğinizi keşfedeceğiz.

---

### 📌 State Yönetim Teknikleri

#### 1. useState

React'ta en temel state yönetimi hook'u olan **useState**, bileşenler arasındaki veriyi yönetmek için kullanılır.

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

#### 2. useReducer

useReducer, daha karmaşık state yönetimi için kullanılır. Bu hook, daha büyük uygulamalarda faydalıdır ve redux gibi dış kütüphanelere benzer.

\`\`\`tsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

#### 3. Redux ve Context API

Büyük uygulamalar için global state yönetimi gereklidir. Redux ve Context API, farklı state yönetimi yöntemleridir. Redux, daha fazla yapılandırma gerektirirken, Context API daha basit bir çözüm sunar.

---

### ✅ Sonuç

State yönetimini doğru kullanmak, uygulamanızın performansını ve bakımını kolaylaştırır. Uygulamanızın büyüklüğüne göre uygun çözümü seçmek önemlidir.

---
    `
  },
]
