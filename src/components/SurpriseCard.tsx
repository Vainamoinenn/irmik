import type { CSSProperties } from 'react';

import { HeartIcon, SparkleIcon } from './Icons';

const SURPRISE_MESSAGE = [
  'irmagım hayatımda olduğun için o kadar şanslıyım ki ne zaman ihtiyacım olsa yanımda olacağını bildiğim ve en saçma anlarda bile güldüğüm o kız kardesim..',
  'seninle yaptığım küçük bir an bile benim için çok özel hepsi kalbimde biriktirdiğim en güzel anılar arasında bazen ağladığımız anlar bazen de kahkahalarla dolu gülüşmelerimiz ve en önemlisi de tüm yaşadığımız o kötü anlar..',
  'hatta bazenleri sessizce bir birimizin yanında duruşumuz bile her şey benim için o kadar özel ki.. buraya sığdıramayacagım kadar cok seviyorum seni mutlu olman için her şeyi yapacağımı ve her kararında yanında duracağımı asla unutma.',
  'ayy iyiki doğdun bitanemmm iyiki varsın umarım hep beraber oluruz ve olcaz da çünkü ben bundan cok eminim seni cokkk seviyorum sistaamm tekrardan iyiki doğdun..',
] as const;

function CornerFlourish({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 54 54" fill="none" aria-hidden="true">
      <path
        d="M4 50 C4 26 16 12 40 8 M4 50 C12 44 14 38 13 30 M4 50 C10 46 18 46 24 49 M40 8 C34 12 32 18 33 24 M40 8 C36 6 30 6 26 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <circle cx="45" cy="6" r="2.6" fill="currentColor" />
      <circle cx="7" cy="47" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function SurpriseCard() {
  return (
    <article className="surprise-card" aria-labelledby="surprise-card-title">
      <CornerFlourish className="surprise-card__corner surprise-card__corner--tl" />
      <CornerFlourish className="surprise-card__corner surprise-card__corner--tr" />
      <CornerFlourish className="surprise-card__corner surprise-card__corner--bl" />
      <CornerFlourish className="surprise-card__corner surprise-card__corner--br" />

      <div className="surprise-card__crest">
        <span className="surprise-card__seal" aria-hidden="true"><HeartIcon size={28} /></span>
        <p className="surprise-card__kicker">sadece senin için</p>
        <h3 id="surprise-card-title">Irmak'a, <em>kalbimden.</em></h3>
      </div>

      <div className="surprise-card__divider" aria-hidden="true">
        <SparkleIcon size={17} />
      </div>

      <div className="surprise-card__message">
        {SURPRISE_MESSAGE.map((paragraph, index) => (
          <p
            key={paragraph}
            className="surprise-card__paragraph"
            style={{ '--line-delay': `${260 + index * 150}ms` } as CSSProperties}
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="surprise-card__footer">
        <span>biriktirdiğimiz tüm güzel anılara</span>
        <SparkleIcon size={15} />
        <strong>iyi ki doğdun</strong>
      </div>
    </article>
  );
}
