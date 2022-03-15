import React from "react";

const AboutUs = () => {
    return (
        <div style={{ marginTop: '150px' }}>
            <div className="container">
                <div className="aboutus-header text-center">
                    <h1 className="text-uppercase my-5">HAKKIMIZDA</h1>
                </div>
                <div className="aboutus-content">
                    <h5><b>Vizyonumuz</b></h5><br />
                    <p>
                        Fuar sektöründeki güvenilir, yenilikçi ve akılcı yaklaşımımızla sizlerin en çok tercih ettiği ve güvendiği firma olmak.
                    </p>
                    <br /><h5><b>Misyonumuz</b></h5><br />
                    <b>Neden Varız ?</b>
                    <p>
                        Ülkemizde artık diğer büyük ekonomilerde olduğu gibi ticari faaliyetlerinde profesyonel ekipleri tercih etmektedirler.
                        Profesyonel, güler yüzlü ve anlayışlı ekip arkadaşlarımızla sizlerin fuarlardaki işinizi kolaylaştırmak en önemli görev
                        ve hizmetimizdir.
                    </p>
                    <b>Ne İşe Yararız ?</b>
                    <p>
                        Biz bu sektörde ucuz ve kalitesiz ürünleri sizlere sunan değil, ihtiyacınızı karşılayabilecek en iyi kalitedeki ürünleri
                        sunan firmayız. Kurulum sürecinde sizin üstünüzden ekstra malzeme yükünü almaya yararız.
                    </p>
                    <b>Kime Hitap Ederiz ?</b>
                    <p>
                        Firmamız Fuarlara Katılan Firmalara, Fuar Sektörüne Hitap Eden Şirketlere, Ajanslara, Mimarlık Ofislerine, Kısacası
                        Sektördeki Bütün Firmalar İçin Kusursuz Bir Çözüm Ortağıdır.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default AboutUs;