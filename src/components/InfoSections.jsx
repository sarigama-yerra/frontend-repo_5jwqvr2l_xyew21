import React from 'react'
import { Users, Map, BookOpen, Sparkles, Swords, ScrollText } from 'lucide-react'
import CharactersGaze from './CharactersGaze'

function Section({ id, icon: Icon, title, children, extra }) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-xl bg-white/10 border border-white/10 p-2 text-white">
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-white/80 max-w-3xl">{children}</p>
            {extra}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function InfoSections() {
  return (
    <div className="bg-slate-950">
      <Section id="about" icon={BookOpen} title="Oyun Hakkında">
        Gravity Falls temalı, seçimlere dayalı bir görsel roman. Keşif, karakter ilişkileri ve gizem çözme üzerine kurulu, her seçim farklı sonuçlar doğurur.
      </Section>

      <Section
        id="characters"
        icon={Users}
        title="Karakterler ve Özellikleri"
        extra={
          <div className="mt-6">
            <CharactersGaze />
          </div>
        }
      >
        Ana ve yan karakterlerin kişilik özellikleri, güçleri, ilişkileri ve kişisel hedefleri burada listelenir. Her karakterin geçmişi, bağlı olduğu sırlar ve açığa çıkarılabilir ipuçları ile birlikte verilir.
      </Section>

      <Section id="stories" icon={ScrollText} title="Karakter Hikayeleri">
        Her karakter için başlangıç hikâyesi, kilit karar anları ve çoklu sonlar. İlerledikçe açılan günlük sayfaları ve koleksiyon parçalarıyla derinleşen bir anlatı.
      </Section>

      <Section id="map" icon={Map} title="Dünya Haritası ve Bölgeler">
        Kasaba merkezinden ormana, terk edilmiş kulübelerden yeraltı geçitlerine kadar önemli bölgeler. Her bölge için keşif yüzdesi, gizem seviyesi ve bulunabilecek sırlar.
      </Section>

      <Section id="systems" icon={Swords} title="Oynanış Sistemleri">
        İlişki puanları, itibar, ipucu defteri ve bulmaca mekanikleri. Diyalog seçimleri ve toplanan kanıtlar ilerleyişi etkiler.
      </Section>

      <Section id="vibe" icon={Sparkles} title="Ton ve Atmosfer">
        Esrarengiz, eğlenceli ve zaman zaman ürkütücü bir tonalite. Neon vurgular, loş ışıklar ve retro çizgi doku kombinasyonu ile benzersiz bir görsel kimlik.
      </Section>
    </div>
  )
}
