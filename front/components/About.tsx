import React from 'react';
import { useSiteContent } from '../hooks/useSiteContent';
import { bbcodeToHtml } from '../utils/bbcode';

const About: React.FC = () => {
  const { getPage, getText, getImage } = useSiteContent('about');
  const { getText: getGeneralText } = useSiteContent('general');
  const page = getPage('about');

  const dynamicStats: any[] = [];

  if (page?.sections) {
    // Stats: label then value pairs
    const statLabels = page.sections.filter(s => s.id.includes('label-stat'));
    const statValues = page.sections.filter(s => s.id.includes('value-stat'));

    for (let i = 0; i < statLabels.length; i++) {
      if (statLabels[i] && statValues[i]) {
        dynamicStats.push({ label: statLabels[i].value, value: statValues[i].value });
      }
    }
  }

  const stats = dynamicStats.length > 0 ? dynamicStats : [
    { label: getText('txt-pi-lotlar-label-123', 'PİLOTLAR'), value: getGeneralText('STATS_PILOTS') || getText('txt-pi-lotlar-value-123', '140+') },
    { label: getText('txt-yari-lar-label-123', 'YARIŞLAR'), value: getGeneralText('STATS_RACES') || getText('txt-yari-lar-value-123', '50+') },
    { label: getText('txt-g-ncl-r-label-123', 'GƏNCLƏR'), value: getGeneralText('STATS_YOUTH') || getText('txt-g-ncl-r-value-123', '20+') },
  ];

  return (
    <section id="haqqımızda" className="py-16 px-6 lg:px-20 relative overflow-hidden bg-[#0A0A0A] text-white">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
        <div className="flex items-start gap-4">
          <div className="w-2 h-16 bg-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.4)]"></div>
          <div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-white">
              {getText('txt-haqqimizda-904', 'HAQQIMIZDA')}
            </h2>
            <p className="text-[#FF4D00] font-black italic text-[11px] md:text-sm mt-2 uppercase tracking-[0.4em]">
              {getText('txt-bi-zi-m-hekay-mi-z-m-888', 'BİZİM HEKAYƏMİZ // MİSSİYAMIZ VƏ GƏLƏCƏYİMİZ')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-7/12 relative z-10">
          <div className="mt-4">
            <h4 className="text-[#FF4D00] font-black italic text-2xl mb-4 tracking-tight">
              {getText('txt-est-2018-motorsp-949', 'EST. 2018 // MOTORSPORT MƏRKƏZİ')}
            </h4>
            <h2 className="text-3xl md:text-5xl font-black italic leading-tight mb-8 uppercase max-w-2xl text-white tracking-tighter">
              {getText('txt-forsaj-club-az-rba-66', '"FORSAJ CLUB" AZƏRBAYCANIN OFFROAD MƏDƏNİYYƏTİNİ PEŞƏKAR SƏVİYYƏYƏ ÇATDIRMAQ ÜÇÜN YARADILMIŞDIR.')}
            </h2>
            <p
              className="text-gray-400 font-bold italic text-sm md:text-base leading-relaxed mb-12 max-w-xl uppercase tracking-wide"
              dangerouslySetInnerHTML={{ __html: bbcodeToHtml(getText('txt-klubumuz-sad-c-bir-552', 'Klubumuz sadəcə bir həvəskar qrupu deyil, ölkəmizi beynəlxalq ralli xəritəsinə daxil etməyi hədəfləyən rəsmi və peşəkar bir platformadır. 2018-ci ildən bəri biz 50-dən çox rəsmi yarış, 100-dən çox ekspedisiya və saysız-hesabsız adrenalin dolu anlar yaşamışıq.')) }}
            />

            <div className="flex flex-wrap gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#111] border border-white/5 p-8 rounded-sm min-w-[140px] shadow-2xl">
                  <p className="text-[#FF4D00] font-black italic text-[10px] mb-2 tracking-widest uppercase">{stat.label}</p>
                  <p className="text-5xl font-black italic text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 relative hidden lg:block">
          <div className="absolute right-[-10%] top-0 w-[120%] h-full bg-[#111] transform -skew-x-12 overflow-hidden shadow-2xl border-l-8 border-[#FF4D00]/20">
            <img
              src={getImage('img-992', 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?q=80&w=1974&auto=format&fit=crop').path}
              alt={getImage('img-992', '').alt || getText('attr-forsaj-club-detail-405', 'Forsaj Club Detail')}
              className="w-full h-full object-cover opacity-40 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
