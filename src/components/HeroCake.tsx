import { SparkleIcon } from './Icons';

const DRIP_PATH =
  'M0 0 H100 V8 Q95 20 90 9 Q85 2 80 10 Q75 22 70 10 Q65 3 60 9 Q55 18 50 9 Q45 2 40 11 Q35 21 30 10 Q25 3 20 9 Q15 17 10 9 Q5 3 0 8 Z';

function CakeDrips() {
  return (
    <svg className="cake__drips" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
      <path d={DRIP_PATH} fill="currentColor" />
    </svg>
  );
}

function CakePearls() {
  return (
    <div className="cake__pearls" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export function HeroCake() {
  return (
    <div className="cake-stage" role="img" aria-label="Uc katli, mumlari yanan, gullu dogum gunu pastasi">
      <div className="cake-stage__halo" aria-hidden="true" />
      <div className="cake-stage__ring" aria-hidden="true" />
      <div className="cake-stage__ring cake-stage__ring--outer" aria-hidden="true" />
      <div className="cake-stage__ring cake-stage__ring--inner" aria-hidden="true" />
      <span className="cake-stage__sparkle cake-stage__sparkle--one" aria-hidden="true"><SparkleIcon size={22} /></span>
      <span className="cake-stage__sparkle cake-stage__sparkle--two" aria-hidden="true"><SparkleIcon size={15} /></span>
      <span className="cake-stage__sparkle cake-stage__sparkle--three" aria-hidden="true"><SparkleIcon size={18} /></span>

      <div className="cake-scene">
        <div className="cake-scene__shadow" aria-hidden="true" />
        <div className="cake__plate" aria-hidden="true" />

        <div className="cake__tier cake__tier--bottom" aria-hidden="true">
          <CakeDrips />
          <CakePearls />
        </div>
        <div className="cake__tier cake__tier--middle" aria-hidden="true">
          <CakeDrips />
          <CakePearls />
        </div>
        <div className="cake__tier cake__tier--top" aria-hidden="true">
          <CakeDrips />
          <CakePearls />
        </div>

        <div className="cake__rose cake__rose--one" aria-hidden="true" />
        <div className="cake__rose cake__rose--two" aria-hidden="true" />
        <div className="cake__rose cake__rose--three" aria-hidden="true" />
        <div className="cake__leaf cake__leaf--one" aria-hidden="true" />
        <div className="cake__leaf cake__leaf--two" aria-hidden="true" />

        <div className="cake__candles" aria-hidden="true">
          <span className="cake__candle cake__candle--tall"><span className="cake__flame" /></span>
          <span className="cake__candle cake__candle--mid"><span className="cake__flame" /></span>
          <span className="cake__candle cake__candle--short"><span className="cake__flame" /></span>
        </div>
      </div>

      <div className="cake-tag cake-tag--wish">
        <i aria-hidden="true" />
        <span>dilek tut, üfle</span>
      </div>
      <div className="cake-tag cake-tag--level">
        <strong>+1</strong>
        <span>yeni yaş, yeni ışık</span>
      </div>
    </div>
  );
}
