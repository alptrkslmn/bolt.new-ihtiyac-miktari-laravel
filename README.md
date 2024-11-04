# İhtiyaç Miktarı Hesaplama Uygulaması

Bu uygulama, müşterilerin ihtiyaç duydukları ürün miktarını hesaplamalarına yardımcı olan bir web uygulamasıdır.

## Özellikler

- Alan hesaplama (m²)
  - Otomatik hesaplayıcı ile en × boy hesaplama
  - Manuel alan girişi
- Kutu adeti hesaplama
  - %10 fire payı otomatik ekleme
  - Kutu başına m² hesaplama
- Fiyat hesaplama
  - m² başına fiyat
  - Kutu başına fiyat
  - Toplam tutar (KDV dahil)

## Kullanım

### Alan Hesaplama

1. **Otomatik Hesaplayıcı**
   - "Alan Hesaplayınız" butonuna tıklayın
   - Açılan pencerede en ve boy ölçülerini girin
   - "Hesapla" butonuna tıklayın
   - Sonucu temizlemek için "X" ikonuna tıklayın

2. **Manuel Giriş**
   - "veya" yazısının yanındaki alana direkt m² değerini girin

### Kutu Adeti

- "+" ve "-" butonları ile kutu adedini ayarlayın
- veya direkt sayı girişi yapın
- Sistem otomatik olarak %10 fire payı ekler

### Fiyatlandırma

- m² fiyatı: 444.00 TL
- 1 Kutu = 1.26 m²
- Kutu fiyatı = m² fiyatı × kutu m²'si
- Toplam tutar KDV dahildir

## Önemli Notlar

- Teslimat ücretleri fiyata dahil değildir, sepette eklenecektir
- 15 m²'nin üzerindeki siparişlerde kargo bedeli alınmaz
- Ürün satışları kutu adedi üzerinden yapılmaktadır
- Alan hesaplamasında %10 fire payı otomatik eklenir

## Teknik Detaylar

### Kullanılan Teknolojiler

- React
- TypeScript
- Tailwind CSS
- Lucide React (ikonlar)
- Vite (build tool)

### Geliştirme

1. Projeyi klonlayın
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

### Production Build

```bash
npm run build
```

### Deployment

Uygulama Netlify üzerinde host edilmektedir. Her commit sonrası otomatik deploy edilir.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.