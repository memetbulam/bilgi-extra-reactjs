import React, { createContext, useState } from "react";

export const ProductListContext = createContext();

const ProductListContextProvider = ({ children }) => {
    const [Products, setProducts] = useState([
        {
            id: 1, name: "AHŞAP VİP SANDALYE", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "ahsap-vip-sandalye.jpeg", alt: "AHŞAP VİP SANDALYE" }
            ],
            modal: [
                { mId: "product-modal-1", data_bs_target: "#product-modal-1", data_bs_target_btn: '#cl-modal-1' }
            ]
        },
        {
            id: 2, name: "CAM MASA", type: "Kiralık", color: "Şeffaf - Siyah", dimension: "-", code: "-",
            images: [
                { image: "cam-masa-seffaf.jpg", alt: "CAM MASA - ŞEFFAF" },
                { image: "cam-masa-siyah.jpg", alt: "CAM MASA - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-2", data_bs_target: "#product-modal-2", cId: 'cl-modal-2', data_bs_target_btn: '#cl-modal-2' }
            ]
        },
        {
            id: 3, name: "AHŞAP SANDALYE", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "ahsap-sandalye.jpeg", alt: "AHŞAP SANDALYE" }
            ],
            modal: [
                { mId: "product-modal-3", data_bs_target: "#product-modal-3", data_bs_target_btn: '#cl-modal-3' }
            ]
        },
        {
            id: 4, name: "VİP SANDALYE", type: "Kiralık", color: "Beyaz - Siyah", dimension: "-", code: "-",
            images: [
                { image: "vip-sandalye-beyaz.jpeg", alt: "VİP SANDALYE - BEYAZ" },
                { image: "vip-sandalye-siyah.jpeg", alt: "VİP SANDALYE - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-4", data_bs_target: "#product-modal-4", cId: 'cl-modal-4', data_bs_target_btn: '#cl-modal-4' }
            ]
        },
        {
            id: 5, name: "AHŞAP MASA", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "ahsap-masa-beyaz.jpeg", alt: "AHŞAP MASA - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-5", data_bs_target: "#product-modal-5", data_bs_target_btn: '#cl-modal-5' }
            ]
        },
        {
            id: 6, name: "KARELİ SANDALYE", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "kareli-sandalye.jpeg", alt: "KARELİ SANDALYE - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-6", data_bs_target: "#product-modal-6", data_bs_target_btn: '#cl-modal-6' }
            ]
        },
        {
            id: 7, name: "ÇİFTLİ KOLTUK", type: "Kiralık", color: "Beyaz - Siyah", dimension: "-", code: "-",
            images: [
                { image: "ciftli-koltuk-beyaz.jpeg", alt: "ÇİFTLİ KOLTUK - BEYAZ" },
                { image: "ciftli-koltuk-siyah.jpeg", alt: "ÇİFTLİ KOLTUK - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-7", data_bs_target: "#product-modal-7", cId: 'cl-modal-7', data_bs_target_btn: '#cl-modal-7' }
            ]
        },
        {
            id: 8, name: "BİSTRO CAM MASA", type: "Kiralık", color: "Şeffaf", dimension: "-", code: "-",
            images: [
                { image: "bistro-cam-masa.jpg", alt: "BİSTRO CAM MASA" }
            ],
            modal: [
                { mId: "product-modal-8", data_bs_target: "#product-modal-8", data_bs_target_btn: '#cl-modal-8' }
            ]
        },
        {
            id: 9, name: "TEKLİ KOLTUK", type: "Kiralık", color: "Beyaz - Siyah", dimension: "-", code: "-",
            images: [
                { image: "tekli-koltuk-beyaz.jpeg", alt: "TEKLİ KOLTUK - BEYAZ" },
                { image: "tekli-koltuk-siyah.jpeg", alt: "TEKLİ KOLTUK - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-9", data_bs_target: "#product-modal-9", cId: 'cl-modal-9', data_bs_target_btn: '#cl-modal-9' }
            ]
        },
        {
            id: 10, name: "AMORTİSÖRLÜ BAR TABURESİ", type: "Kiralık", color: "Beyaz - Siyah", dimension: "-", code: "-",
            images: [
                { image: "amortisorlu-bar-taburesi-beyaz.jpeg", alt: "AMORTİSÖRLÜ BAR TABURESİ - BEYAZ" },
                { image: "amortisorlu-bar-taburesi-siyah.jpeg", alt: "AMORTİSÖRLÜ BAR TABURESİ - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-10", data_bs_target: "#product-modal-10", cId: 'cl-modal-10', data_bs_target_btn: '#cl-modal-10' }
            ]
        },
        {
            id: 11, name: "AHŞAP SEHPA", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "ahsap-sehpa.jpeg", alt: "AHŞAP SEHPA - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-11", data_bs_target: "#product-modal-11", data_bs_target_btn: '#cl-modal-11' }
            ]
        },
        {
            id: 12, name: "AMORTİSÖRSÜZ BAR TABURESİ", type: "Kiralık", color: "Beyaz - Siyah", dimension: "-", code: "-",
            images: [
                { image: "amortisorsuz-bar-taburesi-beyaz.jpeg", alt: "AMORTİSÖRSÜZ BAR TABURESİ - BEYAZ" },
                { image: "amortisorsuz-bar-taburesi-beyaz.jpeg", alt: "AMORTİSÖRSÜZ BAR TABURESİ - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-12", data_bs_target: "#product-modal-12", cId: 'cl-modal-12', data_bs_target_btn: '#cl-modal-12' }
            ]
        },
        {
            id: 13, name: "BUZDOLABI", type: "Kiralık", color: "BEYAZ", dimension: "-", code: "-",
            images: [
                { image: "buzdolabi.jpeg", alt: "BUZDOLABI - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-13", data_bs_target: "#product-modal-13", data_bs_target_btn: '#cl-modal-13' }
            ]
        },
        {
            id: 14, name: "CAM SEHPA", type: "Kiralık", color: "Buzlu - Siyah", dimension: "-", code: "-",
            images: [
                { image: "cam-sehpa-buzlu.png", alt: "CAM SEHPA - BUZLU" },
                { image: "cam-sehpa-siyah.jpg", alt: "CAM SEHPA - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-14", data_bs_target: "#product-modal-14", cId: 'cl-modal-14', data_bs_target_btn: '#cl-modal-14' }
            ]
        },
        {
            id: 15, name: "SU SEBİLİ", type: "Kiralık", color: "BEYAZ", dimension: "-", code: "-",
            images: [
                { image: "su-sebili.jpeg", alt: "SU SEBİLİ - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-15", data_bs_target: "#product-modal-15", data_bs_target_btn: '#cl-modal-15' }
            ]
        },
        {
            id: 16, name: "BROŞÜRLÜK", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "brosurluk.jpeg", alt: "BROŞÜRLÜK - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-16", data_bs_target: "#product-modal-16", data_bs_target_btn: '#cl-modal-16' }
            ]
        },
        {
            id: 17, name: "SAKSIDA ÇİÇEK", type: "Kiralık", color: "-", dimension: "-", code: "-",
            images: [
                { image: "saksida-cicek-ozel.jpeg", alt: "SAKSIDA ÇİÇEK - ÖZEL" },
                { image: "saksida-cicek-sade.jpeg", alt: "SAKSIDA ÇİÇEK - SADE" }
            ],
            modal: [
                { mId: "product-modal-17", data_bs_target: "#product-modal-17", cId: 'cl-modal-17', data_bs_target_btn: '#cl-modal-17' }
            ]
        },
        {
            id: 18, name: "TELEVİZYON", type: "Kiralık", color: "Siyah", dimension: "-", code: "-",
            images: [
                { image: "televizyon.jpeg", alt: "TELEVİZYON - SİYAH" }
            ],
            modal: [
                { mId: "product-modal-18", data_bs_target: "#product-modal-18", data_bs_target_btn: '#cl-modal-18' }
            ]
        },
        {
            id: 19, name: "ÇÖP KOVASI", type: "Kiralık", color: "Beyaz", dimension: "-", code: "-",
            images: [
                { image: "cop-kutusu.jpeg", alt: "ÇÖP KOVASI - BEYAZ" }
            ],
            modal: [
                { mId: "product-modal-19", data_bs_target: "#product-modal-19", data_bs_target_btn: '#cl-modal-19' }
            ]
        },
        {
            id: 20, name: "ASKILIK", type: "Kiralık", color: "Gri", dimension: "-", code: "-",
            images: [
                { image: "askilik.jpeg", alt: "ASKILIK - GRİ" }
            ],
            modal: [
                { mId: "product-modal-20", data_bs_target: "#product-modal-20", data_bs_target_btn: '#cl-modal-20' }
            ]
        },
        {
            id: 21, name: "SU ISITICISI KETTLE", type: "Kiralık", color: "Pembe", dimension: "-", code: "-",
            images: [
                { image: "kettle.jpeg", alt: "SU ISITICISI KETTLE - PEMBE" }
            ],
            modal: [
                { mId: "product-modal-21", data_bs_target: "#product-modal-21", data_bs_target_btn: '#cl-modal-21' }
            ]
        }
    ]);
    return (
        <ProductListContext.Provider value={{ Products, setProducts }}>
            {children}
        </ProductListContext.Provider>
    );
}

export default ProductListContextProvider;