import { useEffect, useState, type CSSProperties } from 'react';

import { Confetti } from './components/Confetti';
import { Cosmos } from './components/Cosmos';
import { Fireworks } from './components/Fireworks';
import { HeroCake } from './components/HeroCake';
import {
  ArrowUpRightIcon,
  CakeIcon,
  CameraIcon,
  ChevronDownIcon,
  HeartIcon,
  HomeIcon,
  SparkleIcon,
  StarIcon,
} from './components/Icons';
import { Reveal } from './components/Reveal';
import { SurpriseCard } from './components/SurpriseCard';

const MOMENTS = [
  {
    variant: 'laugh',
    icon: CameraIcon,
    tag: 'kahkaha arşivi',
    title: 'En saçma anların bile',
    accent: 'başrolüsün.',
    copy: 'Telefonda saatlerce konuşmalar, sebepsiz gülüşmeler, "bir dakika dur" deyip fotoğrafını çektiğim her an. Hepsi arşivimin en kıymetli köşesinde.',
  },
  {
    variant: 'home',
    icon: HomeIcon,
    tag: 'güvenli liman',
    title: 'İyi günde de kötü günde de',
    accent: 'yan yana.',
    copy: 'Bazen tek kelime etmeden yan yana durmak bile yeter. Seninle sessizlik bile sohbet gibi. Bu dünyada sığınağım olduğun için teşekkürler.',
  },
  {
    variant: 'cake',
    icon: CakeIcon,
    tag: 'bugünün anlamı',
    title: 'Takvimin en tatlı günü,',
    accent: 'senin günün.',
    copy: 'Bugün mumlar senin için yanıyor, bütün dilekler senin için tutuluyor. Yeni yaşın sana en az senin kadar güzel şeyler getirsin.',
  },
] as const;

function App() {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const [fireKey, setFireKey] = useState(0);

  useEffect(() => {
    const welcome = window.setTimeout(() => {
      setBurstKey((current) => current + 1);
      setIsCelebrating(true);
    }, 800);

    return () => window.clearTimeout(welcome);
  }, []);

  useEffect(() => {
    if (!isCelebrating) {
      return;
    }

    const timeout = window.setTimeout(() => setIsCelebrating(false), 3400);

    return () => window.clearTimeout(timeout);
  }, [isCelebrating]);

  function handleCelebrate() {
    setBurstKey((current) => current + 1);
    setIsCelebrating(true);
  }

  function handleNightWish() {
    setFireKey((current) => current + 1);
    handleCelebrate();
  }

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">içeriğe atla</a>
      <Cosmos />
      <Confetti burstKey={burstKey} isActive={isCelebrating} />

      <header className="topbar container anim-item" style={{ '--anim-delay': '100ms' } as CSSProperties}>
        <a className="brand" href="#home" aria-label="Irmak'ın günü ana sayfa">
          <span className="brand__crest"><SparkleIcon size={20} /></span>
          <span className="brand__name">
            <strong>Irmak</strong>
            <small>doğum günü</small>
          </span>
        </a>

        <nav className="topbar__nav" aria-label="Ana navigasyon">
          <a href="#letter">mektup</a>
          <a href="#moments">anılar</a>
          <a href="#wish">dilek</a>
        </nav>

        <span className="topbar__date">
          <i aria-hidden="true" />
          bugün, senin günün
        </span>
      </header>

      <main id="main-content">
        <section className="hero container" id="home" aria-labelledby="hero-title">
          <div className="hero__frame">
            <p className="hero__script anim-item" style={{ '--anim-delay': '220ms' } as CSSProperties}>
              bir yıldız daha parlıyor, çünkü bugün...
            </p>
            <h1 id="hero-title" className="anim-item" style={{ '--anim-delay': '360ms' } as CSSProperties}>
              <span className="hero__line">Doğum günün</span>
              <span className="hero__line hero__line--gold">kutlu olsun</span>
              <span className="hero__line">Irmak.</span>
            </h1>
            <div className="hero__rule anim-item" style={{ '--anim-delay': '520ms' } as CSSProperties}>
              <SparkleIcon size={18} />
            </div>
            <p className="hero__intro anim-item" style={{ '--anim-delay': '600ms' } as CSSProperties}>
              Bugün sıradan bir gün değil. Bugün, hayatıma kattığın bütün renklerin, kahkahaların ve güzel anların yıldönümü. İyi ki doğdun, iyi ki varsın.
            </p>
            <div className="hero__actions anim-item" style={{ '--anim-delay': '740ms' } as CSSProperties}>
              <button className="button button--gold" type="button" onClick={handleCelebrate}>
                <span>{isCelebrating ? 'Kutlama sürüyor!' : 'Kutlamayı başlat'}</span>
                <span className="button__icon"><SparkleIcon size={19} /></span>
              </button>
              <a className="button button--ghost" href="#letter">
                <span>mektubu aç</span>
                <span className="button__icon"><ArrowUpRightIcon size={17} /></span>
              </a>
            </div>
            <ul className="hero__notes anim-item" style={{ '--anim-delay': '880ms' } as CSSProperties}>
              <li><StarIcon size={13} /> sonsuz sevgi</li>
              <li><StarIcon size={13} /> bitmeyen kahkaha</li>
              <li><StarIcon size={13} /> yepyeni maceralar</li>
            </ul>
          </div>

          <div className="anim-item anim-item--scale" style={{ '--anim-delay': '480ms' } as CSSProperties}>
            <HeroCake />
          </div>

          <a className="hero__scroll anim-item" href="#letter" style={{ '--anim-delay': '1020ms' } as CSSProperties}>
            <span>devam et</span>
            <span className="hero__scroll-icon"><ChevronDownIcon size={16} /></span>
          </a>
        </section>

        <div className="ribbon anim-item" aria-hidden="true" style={{ '--anim-delay': '900ms' } as CSSProperties}>
          <div className="ribbon__track">
            <span>iyi ki doğdun Irmak</span><SparkleIcon size={16} />
            <span>yeni yaşın parlasın</span><SparkleIcon size={16} />
            <span>bugün bütün yıldızlar senin</span><SparkleIcon size={16} />
            <span>iyi ki doğdun Irmak</span><SparkleIcon size={16} />
            <span>yeni yaşın parlasın</span><SparkleIcon size={16} />
            <span>bugün bütün yıldızlar senin</span><SparkleIcon size={16} />
          </div>
        </div>

        <section className="section container" id="letter" aria-labelledby="letter-title">
          <Reveal className="section-heading">
            <p className="section-heading__script">senin için yazıldı</p>
            <h2 id="letter-title">Bazı duygular kağıda sığmaz, <em>yine de denedim.</em></h2>
            <div className="section-heading__ornament"><SparkleIcon size={16} /></div>
          </Reveal>

          <Reveal className="surprise-wrap" variant="scale" delay={140}>
            <SurpriseCard />
          </Reveal>
        </section>

        <section className="section container" id="moments" aria-labelledby="moments-title">
          <Reveal className="section-heading">
            <p className="section-heading__script">küçük bir koleksiyon</p>
            <h2 id="moments-title">Seninle biriktirdiğim <em>güzel şeyler.</em></h2>
            <div className="section-heading__ornament"><SparkleIcon size={16} /></div>
          </Reveal>

          <div className="moments">
            {MOMENTS.map((moment, index) => {
              const MomentIcon = moment.icon;

              return (
                <Reveal
                  key={moment.variant}
                  variant={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
                  delay={index * 130}
                >
                  <article className={`moment moment--${moment.variant}`}>
                    <div className="moment__window" aria-hidden="true">
                      <div className="moment__disc moment__disc--sun" />
                      <div className="moment__hill" />
                      <div className="moment__arc" />
                      <div className="moment__arc moment__arc--two" />
                      <span className="moment__star moment__star--one"><SparkleIcon size={15} /></span>
                      <span className="moment__star moment__star--two"><SparkleIcon size={11} /></span>
                    </div>
                    <div className="moment__body">
                      <span className="moment__tag"><MomentIcon size={14} /> {moment.tag}</span>
                      <h3>{moment.title} <em>{moment.accent}</em></h3>
                      <p>{moment.copy}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="night" id="wish" aria-labelledby="wish-title">
          <Fireworks burstKey={fireKey} />
          <div className="night__moon" aria-hidden="true" />
          <span className="night__lantern night__lantern--one" aria-hidden="true"><SparkleIcon size={20} /></span>
          <span className="night__lantern night__lantern--two" aria-hidden="true"><SparkleIcon size={14} /></span>
          <span className="night__lantern night__lantern--three" aria-hidden="true"><SparkleIcon size={17} /></span>

          <div className="night__inner container">
            <Reveal>
              <p className="night__script">gökyüzüne bak, şimdi...</p>
              <h2 id="wish-title">Gözlerini kapat ve <em>bir dilek tut.</em></h2>
              <p className="night__text">
                Bu yaşının en güzel hikayesi henüz yazılmadı. Dileğini evrene fısılda; gerisini yıldızlara, biraz da bana bırak.
              </p>
              <button className="button button--night" type="button" onClick={handleNightWish}>
                <span>gökyüzünü aydınlat</span>
                <span className="button__icon"><SparkleIcon size={19} /></span>
              </button>
              <p className="night__hint">havai fişekler senin için</p>
            </Reveal>
          </div>

          <div className="night__stamp" aria-hidden="true">
            <span>sonsuz</span>
            <strong>∞</strong>
            <span>güzel şey</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__rule" />
          <div className="footer__row">
            <span>sevgiyle hazırlandı</span>
            <HeartIcon size={14} />
            <strong>Irmak için</strong>
            <a href="#home">başa dön <ArrowUpRightIcon size={14} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
