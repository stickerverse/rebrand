(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    16760: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(49306);
        },
      ]);
    },
    49306: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => b });
      var r = a(37876),
        s = a(94250),
        o = a.n(s),
        n = a(14232),
        l = a(48230),
        c = a.n(l),
        i = a(54587),
        d = a.n(i),
        x = a(63448),
        m = a(89099),
        p = a(7931);
      function b() {
        let [e, t] = (0, n.useState)(!1),
          [a, s] = (0, n.useState)(!1),
          [l, i] = (0, n.useState)(null),
          [b, g] = (0, n.useState)(!0);
        (0, m.useRouter)(),
          (0, n.useEffect)(() => {
            f();
          }, []);
        let f = async () => {
          try {
            {
              let e = (0, p.b)(),
                {
                  data: { session: t },
                } = await e.auth.getSession();
              i((null == t ? void 0 : t.user) || null);
            }
          } catch (e) {
            console.error("Error checking user:", e);
          } finally {
            g(!1);
          }
        };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(x.A, {
            title: "Sticker Shuttle - Premium Custom Stickers & Vinyl Banners",
            description:
              "Professional custom stickers, vinyl banners, and decals with fast printing. Trusted by Amazon, Nike, Harry Potter and thousands of businesses. Free shipping, high quality materials.",
            ogImage:
              "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1752101226/StickerShuttle_Homepage_Share_fpoirg.png",
            keywords:
              "custom stickers, vinyl stickers, holographic stickers, clear stickers, chrome stickers, glitter stickers, custom decals, vinyl banners, business stickers, promotional stickers, logo stickers",
            canonical: "https://stickershuttle.com",
            structuredData: {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sticker Shuttle",
              url: "https://stickershuttle.com",
              logo: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749591683/White_Logo_ojmn3s.png",
              description:
                "Professional custom sticker printing with fast shipping and high quality materials. Trusted by brands like Amazon, Nike, and thousands of businesses worldwide.",
              foundingDate: "2024",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-STICKER",
                contactType: "customer service",
                email: "orbit@stickershuttle.com",
              },
              sameAs: [
                "https://twitter.com/stickershuttle",
                "https://instagram.com/stickershuttle",
              ],
              address: { "@type": "PostalAddress", addressCountry: "US" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Custom Sticker Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Custom Vinyl Stickers",
                      description:
                        "High-quality custom vinyl stickers with fast 24-hour printing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Holographic Stickers",
                      description: "Eye-catching holographic custom stickers",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Clear Stickers",
                      description: "Professional transparent custom stickers",
                    },
                  },
                ],
              },
            },
            preconnect: [
              "https://res.cloudinary.com",
              "https://fonts.googleapis.com",
              "https://api.stripe.com",
            ],
            children: [
              (0, r.jsx)("section", {
                className: "jsx-c7c892e1b4771724 relative pt-[20px]",
                children: (0, r.jsx)("div", {
                  className:
                    "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4 pb-4",
                  children: (0, r.jsx)("div", {
                    style: {
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow:
                        "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                    },
                    className:
                      "jsx-c7c892e1b4771724 rounded-2xl pt-12 px-12 pb-8 relative overflow-hidden min-h-[400px] hero-banner",
                    children: (0, r.jsxs)("div", {
                      className:
                        "jsx-c7c892e1b4771724 text-center relative z-10",
                      children: [
                        (0, r.jsxs)("div", {
                          className: "jsx-c7c892e1b4771724 mb-4",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 hidden md:flex items-center justify-center",
                              children: (0, r.jsxs)("div", {
                                style: {
                                  background:
                                    "linear-gradient(135deg, rgba(255, 215, 19, 0.3) 0%, rgba(255, 215, 19, 0.15) 50%, rgba(255, 215, 19, 0.05) 100%)",
                                  border: "1px solid rgba(255, 215, 19, 0.4)",
                                  backdropFilter: "blur(12px)",
                                  color: "#fbbf24",
                                },
                                className:
                                  "jsx-c7c892e1b4771724 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2",
                                children: [
                                  (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1753923671/StickerShuttle_CoinIcon_aperue.png",
                                    alt: "Credits",
                                    className:
                                      "jsx-c7c892e1b4771724 w-4 h-4 object-contain",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "jsx-c7c892e1b4771724",
                                    children: "Earn 5% back on every order",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("div", {
                              style: { color: "#fbbf24" },
                              className:
                                "jsx-c7c892e1b4771724 md:hidden flex items-center justify-center gap-2 text-xs",
                              children: [
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1753923671/StickerShuttle_CoinIcon_aperue.png",
                                  alt: "Credits",
                                  className:
                                    "jsx-c7c892e1b4771724 w-3 h-3 object-contain",
                                }),
                                (0, r.jsx)("span", {
                                  className: "jsx-c7c892e1b4771724",
                                  children: "Earn 5% back on every order",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("h1", {
                          style: {
                            fontFamily:
                              "Rubik, Inter, system-ui, -apple-system, sans-serif",
                            fontWeight: 700,
                          },
                          className:
                            "jsx-c7c892e1b4771724 text-4xl sm:text-5xl md:text-6xl mb-4 leading-none",
                          children: [
                            (0, r.jsx)("span", {
                              className: "jsx-c7c892e1b4771724 block md:inline",
                              children: "Tired of waiting",
                            }),
                            (0, r.jsx)("span", {
                              className: "jsx-c7c892e1b4771724 block md:inline",
                              children: " weeks to get",
                            }),
                            (0, r.jsx)("span", {
                              className: "jsx-c7c892e1b4771724 block md:block",
                              children: " your stickers?",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("p", {
                          className:
                            "jsx-c7c892e1b4771724 text-lg sm:text-xl mb-6 text-purple-100",
                          children: [
                            (0, r.jsx)("span", {
                              className:
                                "jsx-c7c892e1b4771724 block sm:inline md:block",
                              children:
                                "See why brands like Amazon, Nike Football, and thousands",
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "jsx-c7c892e1b4771724 block sm:inline md:inline",
                              children:
                                "of others trust us with their business.",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "jsx-c7c892e1b4771724 flex flex-col items-center gap-4 mb-4",
                          children: [
                            (0, r.jsx)("a", {
                              href: "/products",
                              className:
                                "jsx-c7c892e1b4771724 primaryButton px-12 py-4 font-bold text-lg transition-all duration-300 transform hover:scale-[1.004] inline-block rounded-lg",
                              children: "Start Here →",
                            }),
                            (0, r.jsx)("a", {
                              href: "/products/sample-packs",
                              className:
                                "jsx-c7c892e1b4771724 text-white hover:text-purple-200 transition pb-0 md:pb-0",
                              children: "Order Sample Pack →",
                            }),
                            (0, r.jsx)("a", {
                              href: "/deals",
                              className:
                                "jsx-c7c892e1b4771724 text-white hover:text-purple-200 transition pb-8  md:pb-0 block md:hidden",
                              children: "\uD83D\uDD25 Deals →",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, r.jsx)("section", {
                className: "jsx-c7c892e1b4771724 py-4",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "jsx-c7c892e1b4771724 flex justify-center mb-4",
                      children: (0, r.jsx)("div", {
                        style: {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow:
                            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(12px)",
                        },
                        className:
                          "jsx-c7c892e1b4771724 px-4 py-1.5 rounded-full text-center text-sm text-gray-300",
                        children: "Brands we print for:",
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-c7c892e1b4771724 relative overflow-hidden",
                      children: [
                        (0, r.jsxs)("div", {
                          style: {
                            animation: "scroll 35s linear infinite",
                            width: "max-content",
                          },
                          className:
                            "jsx-c7c892e1b4771724 flex gap-4 animate-scroll",
                          children: [
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593661/StickerShuttle_Brands_AndHealth_bawirz.png",
                              alt: "AndHealth",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-1",
                              priority: !0,
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593675/Wahl-Icon-Web_tq0jqm.webp",
                              alt: "Wahl",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                              priority: !0,
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593600/Amazon-Go_by2gkb.png",
                              alt: "Amazon",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-3",
                              priority: !0,
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593604/ChickFilA-Icon-Web_anobg1.png",
                              alt: "Chick-fil-A",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-4",
                              priority: !0,
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593665/StickerShuttle_Brands_Nike_gmedyb.png",
                              alt: "Nike",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-5",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751505017/StickerShuttle_HarryPotter_zlrki5.png",
                              alt: "Harry Potter",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-6",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751396878/CanAmIcon_o3tydg.png",
                              alt: "Can-Am",
                              width: 96,
                              height: 64,
                              className: "h-16 w-auto brand-float-1",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593671/StickerShuttle_Brands_XFinity_nz2obt.png",
                              alt: "Xfinity",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593669/StickerShuttle_Brands_Valhallan_cxjhgn.png",
                              alt: "Valhallan",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-3",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593665/StickerShuttle_Brands_SSPR_ewqax7.png",
                              alt: "SSPR",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-4",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593662/StickerShuttle_Brands_CGR_ryewlb.png",
                              alt: "CGR",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-5",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593669/StickerShuttle_Brands_WF_vrafue.png",
                              alt: "WF",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-6",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593666/StickerShuttle_Brands_UnoMas_ntorew.png",
                              alt: "UnoMas",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-1",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593610/LT-Icon_llqxai.png",
                              alt: "LT",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593661/StickerShuttle_Brands_AndHealth_bawirz.png",
                              alt: "AndHealth",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-1",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593675/Wahl-Icon-Web_tq0jqm.webp",
                              alt: "Wahl",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593600/Amazon-Go_by2gkb.png",
                              alt: "Amazon",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-3",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593604/ChickFilA-Icon-Web_anobg1.png",
                              alt: "Chick-fil-A",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-4",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593665/StickerShuttle_Brands_Nike_gmedyb.png",
                              alt: "Nike",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-5",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751505017/StickerShuttle_HarryPotter_zlrki5.png",
                              alt: "Harry Potter",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-6",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751396878/CanAmIcon_o3tydg.png",
                              alt: "Can-Am",
                              width: 96,
                              height: 64,
                              className: "h-16 w-auto brand-float-1",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593671/StickerShuttle_Brands_XFinity_nz2obt.png",
                              alt: "Xfinity",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593669/StickerShuttle_Brands_Valhallan_cxjhgn.png",
                              alt: "Valhallan",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-3",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593665/StickerShuttle_Brands_SSPR_ewqax7.png",
                              alt: "SSPR",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-4",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593662/StickerShuttle_Brands_CGR_ryewlb.png",
                              alt: "CGR",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-5",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593669/StickerShuttle_Brands_WF_vrafue.png",
                              alt: "WF",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-6",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593666/StickerShuttle_Brands_UnoMas_ntorew.png",
                              alt: "UnoMas",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-1",
                            }),
                            (0, r.jsx)(d(), {
                              src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593610/LT-Icon_llqxai.png",
                              alt: "LT",
                              width: 120,
                              height: 80,
                              className: "h-20 w-auto brand-float-2",
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "jsx-c7c892e1b4771724 absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030140] to-transparent pointer-events-none",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "jsx-c7c892e1b4771724 absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030140] to-transparent pointer-events-none",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("section", {
                className: "jsx-c7c892e1b4771724 py-4",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4 relative",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-c7c892e1b4771724 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 group/container",
                      children: [
                        (0, r.jsx)(c(), {
                          href: "/products/vinyl-stickers",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 vinyl-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593599/Alien_Rocket_mkwlag.png",
                                  alt: "Vinyl Stickers",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Vinyl Stickers →",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(c(), {
                          href: "/products/holographic-stickers",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 holographic-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:-rotate-3 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593621/PurpleAlien_StickerShuttle_HolographicIcon_ukdotq.png",
                                  alt: "Holographic Stickers",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Holographic Stickers →",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(c(), {
                          href: "/products/glitter-stickers",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 glitter-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:-rotate-2 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593602/BlueAlien_StickerShuttle_GlitterIcon_rocwpi.png",
                                  alt: "Glitter Stickers",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Glitter Stickers →",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(c(), {
                          href: "/products/chrome-stickers",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 chrome-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-2 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593680/yELLOWAlien_StickerShuttle_ChromeIcon_nut4el.png",
                                  alt: "Chrome Stickers",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Chrome Stickers →",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(c(), {
                          href: "/products/clear-stickers",
                          className: "lg:hidden",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 clear-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:-rotate-1 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749849590/StickerShuttle_ClearIcon_zxjnqc.svg",
                                  alt: "Clear Stickers",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Clear Stickers →",
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)(c(), {
                          href: "/products/sticker-sheets",
                          children: (0, r.jsxs)("div", {
                            style: {
                              background: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              boxShadow:
                                "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(12px)",
                            },
                            className:
                              "jsx-c7c892e1b4771724 banner-hover text-center group/card cursor-pointer rounded-2xl p-4 lg:p-6 transition-all duration-300 ease-out hover:scale-105 transform overflow-hidden",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "jsx-c7c892e1b4771724 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto mb-4 lg:mb-6 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-1 transition-transform duration-500 ease-out",
                                children: (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749847809/StickerShuttle_StickerSheetsIcon_2_g61dty.svg",
                                  alt: "Sticker Sheets",
                                  style: { filter: "none" },
                                  className:
                                    "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                }),
                              }),
                              (0, r.jsx)("h3", {
                                className:
                                  "jsx-c7c892e1b4771724 font-semibold text-white group-hover/card:text-purple-400 transition-colors duration-300 ease-out mb-2 text-sm lg:text-base",
                                children: "Sticker Sheets →",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "jsx-c7c892e1b4771724 sm:hidden overflow-x-auto pb-4",
                      children: (0, r.jsxs)("div", {
                        className: "jsx-c7c892e1b4771724 flex space-x-4 w-max",
                        children: [
                          (0, r.jsx)(c(), {
                            href: "/products/vinyl-stickers",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593599/Alien_Rocket_mkwlag.png",
                                    alt: "Vinyl Stickers",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Vinyl",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Stickers →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/products/holographic-stickers",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593621/PurpleAlien_StickerShuttle_HolographicIcon_ukdotq.png",
                                    alt: "Holographic Stickers",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Holographic",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Stickers →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/products/glitter-stickers",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593602/BlueAlien_StickerShuttle_GlitterIcon_rocwpi.png",
                                    alt: "Glitter Stickers",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Glitter",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Stickers →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/products/chrome-stickers",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749593680/yELLOWAlien_StickerShuttle_ChromeIcon_nut4el.png",
                                    alt: "Chrome Stickers",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Chrome",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Stickers →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/products/clear-stickers",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749849590/StickerShuttle_ClearIcon_zxjnqc.svg",
                                    alt: "Clear Stickers",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Clear",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Stickers →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)(c(), {
                            href: "/products/sticker-sheets",
                            children: (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-48 text-center rounded-2xl p-6",
                              children: [
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 w-32 h-32 mx-auto mb-4 flex items-center justify-center",
                                  children: (0, r.jsx)("img", {
                                    src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749847809/StickerShuttle_StickerSheetsIcon_2_g61dty.svg",
                                    alt: "Sticker Sheets",
                                    style: { filter: "none" },
                                    className:
                                      "jsx-c7c892e1b4771724 w-full h-full object-contain",
                                  }),
                                }),
                                (0, r.jsxs)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 font-semibold text-white",
                                  children: [
                                    "Sticker",
                                    (0, r.jsx)("br", {
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                    "Sheets →",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("section", {
                className: "jsx-c7c892e1b4771724 py-4",
                children: (0, r.jsx)("div", {
                  className:
                    "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4",
                  children: (0, r.jsxs)("div", {
                    className:
                      "jsx-c7c892e1b4771724 flex flex-col space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0",
                    children: [
                      (0, r.jsx)("div", {
                        style: {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow:
                            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(12px)",
                        },
                        className: "jsx-c7c892e1b4771724 rounded-2xl p-6",
                        children: (0, r.jsxs)("div", {
                          className: "jsx-c7c892e1b4771724 flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 text-4xl mr-4",
                              children: "\uD83D\uDCE6",
                            }),
                            (0, r.jsxs)("h3", {
                              className: "jsx-c7c892e1b4771724 font-semibold",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "jsx-c7c892e1b4771724 text-white",
                                  children: "Free shipping",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300",
                                  children: " on all orders, always.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        style: {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow:
                            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(12px)",
                        },
                        className: "jsx-c7c892e1b4771724 rounded-2xl p-6",
                        children: (0, r.jsxs)("div", {
                          className: "jsx-c7c892e1b4771724 flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 text-4xl mr-4 spin-slow",
                              children: "\uD83C\uDF0D",
                            }),
                            (0, r.jsxs)("h3", {
                              className: "jsx-c7c892e1b4771724 font-semibold",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "jsx-c7c892e1b4771724 text-white",
                                  children: "Out of this world quality",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300",
                                  children: ", made here.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        style: {
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow:
                            "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(12px)",
                        },
                        className: "jsx-c7c892e1b4771724 rounded-2xl p-6",
                        children: (0, r.jsxs)("div", {
                          className: "jsx-c7c892e1b4771724 flex items-center",
                          children: [
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 text-4xl mr-4",
                              children: "\uD83D\uDDBC️",
                            }),
                            (0, r.jsxs)("h3", {
                              className: "jsx-c7c892e1b4771724 font-semibold",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "jsx-c7c892e1b4771724 text-white",
                                  children: "Free proof included",
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300",
                                  children: ", no conspiracies.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("section", {
                className: "jsx-c7c892e1b4771724 pt-0 pb-8 md:py-8",
                children: (0, r.jsxs)("div", {
                  className:
                    "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "jsx-c7c892e1b4771724 text-center mb-6 mt-4",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "jsx-c7c892e1b4771724 flex justify-center mb-4",
                          children: (0, r.jsxs)("h2", {
                            className:
                              "jsx-c7c892e1b4771724 text-3xl font-bold text-white",
                            children: [
                              (0, r.jsx)("span", {
                                style: {
                                  filter:
                                    "drop-shadow(0 0 10px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))",
                                  display: "inline-block",
                                },
                                className: "jsx-c7c892e1b4771724",
                                children: "\uD83D\uDC7D",
                              }),
                              " ",
                              (0, r.jsxs)("span", {
                                className:
                                  "jsx-c7c892e1b4771724 relative inline-block",
                                children: [
                                  "Not",
                                  (0, r.jsx)("span", {
                                    className:
                                      "jsx-c7c892e1b4771724 absolute -bottom-1 left-0 right-0 h-1 bg-yellow-400 transform rotate-1 rounded-full",
                                  }),
                                ],
                              }),
                              " a conspiracy theory...",
                            ],
                          }),
                        }),
                        (0, r.jsx)("p", {
                          className:
                            "jsx-c7c892e1b4771724 text-gray-300 text-lg",
                          children:
                            "And we're not aliens, that's why thousands of other businesses DO believe in us...",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-c7c892e1b4771724 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: [
                        (0, r.jsxs)("div", {
                          style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(12px)",
                          },
                          className:
                            "jsx-c7c892e1b4771724 rounded-2xl p-6 flex flex-col",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-c7c892e1b4771724 flex items-center mb-4",
                              children: [
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601651/unnamed_1_100x100_crop_center_ozo8lq.webp",
                                  alt: "Certified Garbage Rat",
                                  className:
                                    "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                }),
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                  alt: "Google",
                                  className:
                                    "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                }),
                              ],
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                              children: "Certified Garbage Rat",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                              children: "Matte Stickers & Vinyl Banners",
                            }),
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                              children: [1, 2, 3, 4, 5].map((e) =>
                                (0, r.jsx)(
                                  "svg",
                                  {
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    className:
                                      "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                    children: (0, r.jsx)("path", {
                                      d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                              children:
                                "We got one of our designs custom made into stickers and they definitely did not disappoint! We had previously been using another website but the speed and quality of sticker shuttle is far better than our stickers before. I would highly recommend!",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(12px)",
                          },
                          className:
                            "jsx-c7c892e1b4771724 rounded-2xl p-6 flex flex-col",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-c7c892e1b4771724 flex items-center mb-4",
                              children: [
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601649/download_1_100x100_crop_center_z69tdh.avif",
                                  alt: "Panda Reaper",
                                  className:
                                    "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                }),
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                  alt: "Google",
                                  className:
                                    "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                }),
                              ],
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                              children: "Panda Reaper",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                              children: "Matte Vinyl Stickers",
                            }),
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                              children: [1, 2, 3, 4, 5].map((e) =>
                                (0, r.jsx)(
                                  "svg",
                                  {
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    className:
                                      "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                    children: (0, r.jsx)("path", {
                                      d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                              children:
                                "Everything was perfect. The sticker themselves is a great quality, and no blurriness on the design. Will be sticking with this company for future stickers!",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(12px)",
                          },
                          className:
                            "jsx-c7c892e1b4771724 rounded-2xl p-6 flex flex-col",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-c7c892e1b4771724 flex items-center mb-4",
                              children: [
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601646/unnamed_14467655-4d00-451c-bca6-b5be86af2814_100x100_crop_center_cmftk1.webp",
                                  alt: "Anita J",
                                  className:
                                    "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                }),
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                  alt: "Google",
                                  className:
                                    "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                }),
                              ],
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                              children: "Anita J",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                              children: "Matte Vinyl Stickers",
                            }),
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                              children: [1, 2, 3, 4, 5].map((e) =>
                                (0, r.jsx)(
                                  "svg",
                                  {
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    className:
                                      "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                    children: (0, r.jsx)("path", {
                                      d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                              children:
                                "Absolutely loved the quality and thickness of the stickers but what really made me excited was the ability to speak to the owner directly who provides amazing customer service and truly delivers on the timelines posted. Would recommend to anyone looking!",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          style: {
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(12px)",
                          },
                          className:
                            "jsx-c7c892e1b4771724 rounded-2xl p-6 flex flex-col",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-c7c892e1b4771724 flex items-center mb-4",
                              children: [
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601644/111_100x100_crop_center_ubs7st.avif",
                                  alt: "Rach Plants",
                                  className:
                                    "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                }),
                                (0, r.jsx)("img", {
                                  src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                  alt: "Google",
                                  className:
                                    "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                }),
                              ],
                            }),
                            (0, r.jsx)("h3", {
                              className:
                                "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                              children: "Rach Plants",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                              children: "Matte Stickers& Vinyl Banners",
                            }),
                            (0, r.jsx)("div", {
                              className: "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                              children: [1, 2, 3, 4, 5].map((e) =>
                                (0, r.jsx)(
                                  "svg",
                                  {
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    className:
                                      "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                    children: (0, r.jsx)("path", {
                                      d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                      className: "jsx-c7c892e1b4771724",
                                    }),
                                  },
                                  e
                                )
                              ),
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                              children:
                                "Incredible! They were able to not only make my business logo into great quality stickers, they also made my own photos into stickers!! I recommend them to everyone looking for custom stickers! Beautiful work, quality, attention to detail, communication! 10/10!",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "jsx-c7c892e1b4771724 md:hidden overflow-x-auto pb-4 relative",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "jsx-c7c892e1b4771724 absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#030140] to-transparent pointer-events-none z-10",
                        }),
                        (0, r.jsxs)("div", {
                          style: {
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                          },
                          className:
                            "jsx-c7c892e1b4771724 flex space-x-4 w-max",
                          children: [
                            (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-72 rounded-2xl p-6 flex flex-col",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex items-center mb-4",
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601651/unnamed_1_100x100_crop_center_ozo8lq.webp",
                                      alt: "Certified Garbage Rat",
                                      className:
                                        "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                    }),
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                      alt: "Google",
                                      className:
                                        "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                                  children: "Certified Garbage Rat",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                                  children: "Matte Stickers & Vinyl Banners",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                                  children: [1, 2, 3, 4, 5].map((e) =>
                                    (0, r.jsx)(
                                      "svg",
                                      {
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        className:
                                          "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                        children: (0, r.jsx)("path", {
                                          d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                          className: "jsx-c7c892e1b4771724",
                                        }),
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                                  children:
                                    "We got one of our designs custom made into stickers and they definitely did not disappoint! We had previously been using another website but the speed and quality of sticker shuttle is far better than our stickers before. I would highly recommend!",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-72 rounded-2xl p-6 flex flex-col",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex items-center mb-4",
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601649/download_1_100x100_crop_center_z69tdh.avif",
                                      alt: "Panda Reaper",
                                      className:
                                        "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                    }),
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                      alt: "Google",
                                      className:
                                        "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                                  children: "Panda Reaper",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                                  children: "Matte Vinyl Stickers",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                                  children: [1, 2, 3, 4, 5].map((e) =>
                                    (0, r.jsx)(
                                      "svg",
                                      {
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        className:
                                          "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                        children: (0, r.jsx)("path", {
                                          d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                          className: "jsx-c7c892e1b4771724",
                                        }),
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                                  children:
                                    "Everything was perfect. The sticker themselves is a great quality, and no blurriness on the design. Will be sticking with this company for future stickers!",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-72 rounded-2xl p-6 flex flex-col",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex items-center mb-4",
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601646/unnamed_14467655-4d00-451c-bca6-b5be86af2814_100x100_crop_center_cmftk1.webp",
                                      alt: "Anita J",
                                      className:
                                        "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                    }),
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                      alt: "Google",
                                      className:
                                        "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                                  children: "Anita J",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                                  children: "Matte Vinyl Stickers",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                                  children: [1, 2, 3, 4, 5].map((e) =>
                                    (0, r.jsx)(
                                      "svg",
                                      {
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        className:
                                          "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                        children: (0, r.jsx)("path", {
                                          d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                          className: "jsx-c7c892e1b4771724",
                                        }),
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                                  children:
                                    "Absolutely loved the quality and thickness of the stickers but what really made me excited was the ability to speak to the owner directly who provides amazing customer service and truly delivers on the timelines posted. Would recommend to anyone looking!",
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              style: {
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow:
                                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(12px)",
                              },
                              className:
                                "jsx-c7c892e1b4771724 flex-shrink-0 w-72 rounded-2xl p-6 flex flex-col",
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex items-center mb-4",
                                  children: [
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601644/111_100x100_crop_center_ubs7st.avif",
                                      alt: "Rach Plants",
                                      className:
                                        "jsx-c7c892e1b4771724 w-12 h-12 rounded-full mr-3",
                                    }),
                                    (0, r.jsx)("img", {
                                      src: "https://res.cloudinary.com/dxcnvqk6b/image/upload/v1749601653/Google__G__logo_svg_100x100_crop_center_hg9knc.avif",
                                      alt: "Google",
                                      className:
                                        "jsx-c7c892e1b4771724 w-8 h-8 ml-auto",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("h3", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-white font-semibold mb-1",
                                  children: "Rach Plants",
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-400 text-sm mb-3",
                                  children: "Matte Stickers& Vinyl Banners",
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "jsx-c7c892e1b4771724 flex gap-1 mb-4",
                                  children: [1, 2, 3, 4, 5].map((e) =>
                                    (0, r.jsx)(
                                      "svg",
                                      {
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        className:
                                          "jsx-c7c892e1b4771724 w-4 h-4 text-yellow-400",
                                        children: (0, r.jsx)("path", {
                                          d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                          className: "jsx-c7c892e1b4771724",
                                        }),
                                      },
                                      e
                                    )
                                  ),
                                }),
                                (0, r.jsx)("p", {
                                  className:
                                    "jsx-c7c892e1b4771724 text-gray-300 text-sm leading-relaxed flex-grow",
                                  children:
                                    "Incredible! They were able to not only make my business logo into great quality stickers, they also made my own photos into stickers!! I recommend them to everyone looking for custom stickers! Beautiful work, quality, attention to detail, communication! 10/10!",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              !l &&
                !b &&
                (0, r.jsx)("section", {
                  className: "jsx-c7c892e1b4771724 py-4",
                  children: (0, r.jsx)("div", {
                    className:
                      "jsx-c7c892e1b4771724 w-[95%] md:w-[90%] xl:w-[95%] 2xl:w-[75%] mx-auto px-4",
                    children: (0, r.jsxs)("div", {
                      style: {
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow:
                          "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(12px)",
                      },
                      className:
                        "jsx-c7c892e1b4771724 rounded-2xl p-8 text-center relative overflow-hidden",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "jsx-c7c892e1b4771724 absolute inset-0 opacity-20",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-6 left-8 text-yellow-400 text-lg",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-4 left-1/4 text-white text-sm",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-8 right-1/4 text-purple-400 text-base",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-6 right-8 text-blue-400 text-sm",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-1/2 left-6 text-green-400 text-sm",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-1/2 right-6 text-pink-400 text-base",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-1/3 left-12 text-orange-400 text-xs",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-2/3 right-12 text-cyan-400 text-sm",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute bottom-6 left-1/3 text-yellow-400 text-sm",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute bottom-8 left-16 text-purple-400 text-xs",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute bottom-4 right-1/3 text-white text-base",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute bottom-6 right-16 text-blue-400 text-sm",
                              children: "✨",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute top-12 left-1/2 text-green-400 text-xs",
                              children: "⭐",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "jsx-c7c892e1b4771724 absolute bottom-12 left-1/2 text-pink-400 text-sm",
                              children: "✨",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "jsx-c7c892e1b4771724 relative z-10",
                          children: [
                            (0, r.jsx)("h2", {
                              className:
                                "jsx-c7c892e1b4771724 text-3xl md:text-4xl font-bold text-white mb-4",
                              children: "Already a customer?",
                            }),
                            (0, r.jsx)("p", {
                              className:
                                "jsx-c7c892e1b4771724 text-gray-300 text-lg mb-6 max-w-2xl mx-auto",
                              children:
                                "Login to track your orders, reorder favorites, and access exclusive customer perks.",
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "jsx-c7c892e1b4771724 flex flex-col sm:flex-row gap-4 justify-center items-center",
                              children: [
                                (0, r.jsx)(c(), {
                                  href: "/login",
                                  children: (0, r.jsx)("button", {
                                    style: {
                                      backgroundColor: "#ffd713",
                                      color: "#030140",
                                      boxShadow:
                                        "2px 2px #cfaf13, 0 0 20px rgba(255, 215, 19, 0.3)",
                                      border: "solid",
                                      borderWidth: "0.03125rem",
                                      borderColor: "#8d9912",
                                    },
                                    className:
                                      "jsx-c7c892e1b4771724 px-8 py-3 font-semibold text-lg transition-all duration-300 transform hover:scale-105 rounded-lg",
                                    children: "Login",
                                  }),
                                }),
                                (0, r.jsx)(c(), {
                                  href: "/signup",
                                  children: (0, r.jsxs)("button", {
                                    className:
                                      "jsx-c7c892e1b4771724 px-8 py-3 font-semibold text-lg text-white hover:text-gray-200 transition-all duration-300 hover:scale-105 rounded-lg border border-gray-400 hover:border-gray-300",
                                    children: [
                                      "New Customer? ",
                                      (0, r.jsx)("span", {
                                        className:
                                          "jsx-c7c892e1b4771724 text-yellow-400",
                                        children: "Sign Up",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              (0, r.jsx)(o(), {
                id: "c7c892e1b4771724",
                children:
                  '@-webkit-keyframes scroll{0%{-webkit-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-50%);transform:translatex(-50%)}}@-moz-keyframes scroll{0%{-moz-transform:translatex(0);transform:translatex(0)}100%{-moz-transform:translatex(-50%);transform:translatex(-50%)}}@-o-keyframes scroll{0%{-o-transform:translatex(0);transform:translatex(0)}100%{-o-transform:translatex(-50%);transform:translatex(-50%)}}@keyframes scroll{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%)}}@-webkit-keyframes float1{0%,100%{-webkit-transform:translatey(0px)rotate(-3deg);transform:translatey(0px)rotate(-3deg)}25%{-webkit-transform:translatey(-3px)rotate(4.5deg);transform:translatey(-3px)rotate(4.5deg)}50%{-webkit-transform:translatey(-6px)rotate(-5deg);transform:translatey(-6px)rotate(-5deg)}75%{-webkit-transform:translatey(-2px)rotate(3.8deg);transform:translatey(-2px)rotate(3.8deg)}}@-moz-keyframes float1{0%,100%{-moz-transform:translatey(0px)rotate(-3deg);transform:translatey(0px)rotate(-3deg)}25%{-moz-transform:translatey(-3px)rotate(4.5deg);transform:translatey(-3px)rotate(4.5deg)}50%{-moz-transform:translatey(-6px)rotate(-5deg);transform:translatey(-6px)rotate(-5deg)}75%{-moz-transform:translatey(-2px)rotate(3.8deg);transform:translatey(-2px)rotate(3.8deg)}}@-o-keyframes float1{0%,100%{-o-transform:translatey(0px)rotate(-3deg);transform:translatey(0px)rotate(-3deg)}25%{-o-transform:translatey(-3px)rotate(4.5deg);transform:translatey(-3px)rotate(4.5deg)}50%{-o-transform:translatey(-6px)rotate(-5deg);transform:translatey(-6px)rotate(-5deg)}75%{-o-transform:translatey(-2px)rotate(3.8deg);transform:translatey(-2px)rotate(3.8deg)}}@keyframes float1{0%,100%{-webkit-transform:translatey(0px)rotate(-3deg);-moz-transform:translatey(0px)rotate(-3deg);-o-transform:translatey(0px)rotate(-3deg);transform:translatey(0px)rotate(-3deg)}25%{-webkit-transform:translatey(-3px)rotate(4.5deg);-moz-transform:translatey(-3px)rotate(4.5deg);-o-transform:translatey(-3px)rotate(4.5deg);transform:translatey(-3px)rotate(4.5deg)}50%{-webkit-transform:translatey(-6px)rotate(-5deg);-moz-transform:translatey(-6px)rotate(-5deg);-o-transform:translatey(-6px)rotate(-5deg);transform:translatey(-6px)rotate(-5deg)}75%{-webkit-transform:translatey(-2px)rotate(3.8deg);-moz-transform:translatey(-2px)rotate(3.8deg);-o-transform:translatey(-2px)rotate(3.8deg);transform:translatey(-2px)rotate(3.8deg)}}@-webkit-keyframes float2{0%,100%{-webkit-transform:translatey(0px)rotate(2.5deg);transform:translatey(0px)rotate(2.5deg)}30%{-webkit-transform:translatey(-4px)rotate(-4.8deg);transform:translatey(-4px)rotate(-4.8deg)}60%{-webkit-transform:translatey(-2px)rotate(5.5deg);transform:translatey(-2px)rotate(5.5deg)}90%{-webkit-transform:translatey(-5px)rotate(-3.2deg);transform:translatey(-5px)rotate(-3.2deg)}}@-moz-keyframes float2{0%,100%{-moz-transform:translatey(0px)rotate(2.5deg);transform:translatey(0px)rotate(2.5deg)}30%{-moz-transform:translatey(-4px)rotate(-4.8deg);transform:translatey(-4px)rotate(-4.8deg)}60%{-moz-transform:translatey(-2px)rotate(5.5deg);transform:translatey(-2px)rotate(5.5deg)}90%{-moz-transform:translatey(-5px)rotate(-3.2deg);transform:translatey(-5px)rotate(-3.2deg)}}@-o-keyframes float2{0%,100%{-o-transform:translatey(0px)rotate(2.5deg);transform:translatey(0px)rotate(2.5deg)}30%{-o-transform:translatey(-4px)rotate(-4.8deg);transform:translatey(-4px)rotate(-4.8deg)}60%{-o-transform:translatey(-2px)rotate(5.5deg);transform:translatey(-2px)rotate(5.5deg)}90%{-o-transform:translatey(-5px)rotate(-3.2deg);transform:translatey(-5px)rotate(-3.2deg)}}@keyframes float2{0%,100%{-webkit-transform:translatey(0px)rotate(2.5deg);-moz-transform:translatey(0px)rotate(2.5deg);-o-transform:translatey(0px)rotate(2.5deg);transform:translatey(0px)rotate(2.5deg)}30%{-webkit-transform:translatey(-4px)rotate(-4.8deg);-moz-transform:translatey(-4px)rotate(-4.8deg);-o-transform:translatey(-4px)rotate(-4.8deg);transform:translatey(-4px)rotate(-4.8deg)}60%{-webkit-transform:translatey(-2px)rotate(5.5deg);-moz-transform:translatey(-2px)rotate(5.5deg);-o-transform:translatey(-2px)rotate(5.5deg);transform:translatey(-2px)rotate(5.5deg)}90%{-webkit-transform:translatey(-5px)rotate(-3.2deg);-moz-transform:translatey(-5px)rotate(-3.2deg);-o-transform:translatey(-5px)rotate(-3.2deg);transform:translatey(-5px)rotate(-3.2deg)}}@-webkit-keyframes float3{0%,100%{-webkit-transform:translatey(0px)rotate(-2deg);transform:translatey(0px)rotate(-2deg)}20%{-webkit-transform:translatey(-2px)rotate(4.5deg);transform:translatey(-2px)rotate(4.5deg)}40%{-webkit-transform:translatey(-5px)rotate(-5.5deg);transform:translatey(-5px)rotate(-5.5deg)}60%{-webkit-transform:translatey(-1px)rotate(3.2deg);transform:translatey(-1px)rotate(3.2deg)}80%{-webkit-transform:translatey(-3px)rotate(-2.8deg);transform:translatey(-3px)rotate(-2.8deg)}}@-moz-keyframes float3{0%,100%{-moz-transform:translatey(0px)rotate(-2deg);transform:translatey(0px)rotate(-2deg)}20%{-moz-transform:translatey(-2px)rotate(4.5deg);transform:translatey(-2px)rotate(4.5deg)}40%{-moz-transform:translatey(-5px)rotate(-5.5deg);transform:translatey(-5px)rotate(-5.5deg)}60%{-moz-transform:translatey(-1px)rotate(3.2deg);transform:translatey(-1px)rotate(3.2deg)}80%{-moz-transform:translatey(-3px)rotate(-2.8deg);transform:translatey(-3px)rotate(-2.8deg)}}@-o-keyframes float3{0%,100%{-o-transform:translatey(0px)rotate(-2deg);transform:translatey(0px)rotate(-2deg)}20%{-o-transform:translatey(-2px)rotate(4.5deg);transform:translatey(-2px)rotate(4.5deg)}40%{-o-transform:translatey(-5px)rotate(-5.5deg);transform:translatey(-5px)rotate(-5.5deg)}60%{-o-transform:translatey(-1px)rotate(3.2deg);transform:translatey(-1px)rotate(3.2deg)}80%{-o-transform:translatey(-3px)rotate(-2.8deg);transform:translatey(-3px)rotate(-2.8deg)}}@keyframes float3{0%,100%{-webkit-transform:translatey(0px)rotate(-2deg);-moz-transform:translatey(0px)rotate(-2deg);-o-transform:translatey(0px)rotate(-2deg);transform:translatey(0px)rotate(-2deg)}20%{-webkit-transform:translatey(-2px)rotate(4.5deg);-moz-transform:translatey(-2px)rotate(4.5deg);-o-transform:translatey(-2px)rotate(4.5deg);transform:translatey(-2px)rotate(4.5deg)}40%{-webkit-transform:translatey(-5px)rotate(-5.5deg);-moz-transform:translatey(-5px)rotate(-5.5deg);-o-transform:translatey(-5px)rotate(-5.5deg);transform:translatey(-5px)rotate(-5.5deg)}60%{-webkit-transform:translatey(-1px)rotate(3.2deg);-moz-transform:translatey(-1px)rotate(3.2deg);-o-transform:translatey(-1px)rotate(3.2deg);transform:translatey(-1px)rotate(3.2deg)}80%{-webkit-transform:translatey(-3px)rotate(-2.8deg);-moz-transform:translatey(-3px)rotate(-2.8deg);-o-transform:translatey(-3px)rotate(-2.8deg);transform:translatey(-3px)rotate(-2.8deg)}}@-webkit-keyframes float4{0%,100%{-webkit-transform:translatey(0px)rotate(4deg);transform:translatey(0px)rotate(4deg)}25%{-webkit-transform:translatey(-3px)rotate(-5.2deg);transform:translatey(-3px)rotate(-5.2deg)}50%{-webkit-transform:translatey(-6px)rotate(6deg);transform:translatey(-6px)rotate(6deg)}75%{-webkit-transform:translatey(-1px)rotate(-3.8deg);transform:translatey(-1px)rotate(-3.8deg)}}@-moz-keyframes float4{0%,100%{-moz-transform:translatey(0px)rotate(4deg);transform:translatey(0px)rotate(4deg)}25%{-moz-transform:translatey(-3px)rotate(-5.2deg);transform:translatey(-3px)rotate(-5.2deg)}50%{-moz-transform:translatey(-6px)rotate(6deg);transform:translatey(-6px)rotate(6deg)}75%{-moz-transform:translatey(-1px)rotate(-3.8deg);transform:translatey(-1px)rotate(-3.8deg)}}@-o-keyframes float4{0%,100%{-o-transform:translatey(0px)rotate(4deg);transform:translatey(0px)rotate(4deg)}25%{-o-transform:translatey(-3px)rotate(-5.2deg);transform:translatey(-3px)rotate(-5.2deg)}50%{-o-transform:translatey(-6px)rotate(6deg);transform:translatey(-6px)rotate(6deg)}75%{-o-transform:translatey(-1px)rotate(-3.8deg);transform:translatey(-1px)rotate(-3.8deg)}}@keyframes float4{0%,100%{-webkit-transform:translatey(0px)rotate(4deg);-moz-transform:translatey(0px)rotate(4deg);-o-transform:translatey(0px)rotate(4deg);transform:translatey(0px)rotate(4deg)}25%{-webkit-transform:translatey(-3px)rotate(-5.2deg);-moz-transform:translatey(-3px)rotate(-5.2deg);-o-transform:translatey(-3px)rotate(-5.2deg);transform:translatey(-3px)rotate(-5.2deg)}50%{-webkit-transform:translatey(-6px)rotate(6deg);-moz-transform:translatey(-6px)rotate(6deg);-o-transform:translatey(-6px)rotate(6deg);transform:translatey(-6px)rotate(6deg)}75%{-webkit-transform:translatey(-1px)rotate(-3.8deg);-moz-transform:translatey(-1px)rotate(-3.8deg);-o-transform:translatey(-1px)rotate(-3.8deg);transform:translatey(-1px)rotate(-3.8deg)}}@-webkit-keyframes float5{0%,100%{-webkit-transform:translatey(0px)rotate(-3.5deg);transform:translatey(0px)rotate(-3.5deg)}30%{-webkit-transform:translatey(-4px)rotate(5.2deg);transform:translatey(-4px)rotate(5.2deg)}60%{-webkit-transform:translatey(-2px)rotate(-4.8deg);transform:translatey(-2px)rotate(-4.8deg)}85%{-webkit-transform:translatey(-5px)rotate(2.8deg);transform:translatey(-5px)rotate(2.8deg)}}@-moz-keyframes float5{0%,100%{-moz-transform:translatey(0px)rotate(-3.5deg);transform:translatey(0px)rotate(-3.5deg)}30%{-moz-transform:translatey(-4px)rotate(5.2deg);transform:translatey(-4px)rotate(5.2deg)}60%{-moz-transform:translatey(-2px)rotate(-4.8deg);transform:translatey(-2px)rotate(-4.8deg)}85%{-moz-transform:translatey(-5px)rotate(2.8deg);transform:translatey(-5px)rotate(2.8deg)}}@-o-keyframes float5{0%,100%{-o-transform:translatey(0px)rotate(-3.5deg);transform:translatey(0px)rotate(-3.5deg)}30%{-o-transform:translatey(-4px)rotate(5.2deg);transform:translatey(-4px)rotate(5.2deg)}60%{-o-transform:translatey(-2px)rotate(-4.8deg);transform:translatey(-2px)rotate(-4.8deg)}85%{-o-transform:translatey(-5px)rotate(2.8deg);transform:translatey(-5px)rotate(2.8deg)}}@keyframes float5{0%,100%{-webkit-transform:translatey(0px)rotate(-3.5deg);-moz-transform:translatey(0px)rotate(-3.5deg);-o-transform:translatey(0px)rotate(-3.5deg);transform:translatey(0px)rotate(-3.5deg)}30%{-webkit-transform:translatey(-4px)rotate(5.2deg);-moz-transform:translatey(-4px)rotate(5.2deg);-o-transform:translatey(-4px)rotate(5.2deg);transform:translatey(-4px)rotate(5.2deg)}60%{-webkit-transform:translatey(-2px)rotate(-4.8deg);-moz-transform:translatey(-2px)rotate(-4.8deg);-o-transform:translatey(-2px)rotate(-4.8deg);transform:translatey(-2px)rotate(-4.8deg)}85%{-webkit-transform:translatey(-5px)rotate(2.8deg);-moz-transform:translatey(-5px)rotate(2.8deg);-o-transform:translatey(-5px)rotate(2.8deg);transform:translatey(-5px)rotate(2.8deg)}}@-webkit-keyframes float6{0%,100%{-webkit-transform:translatey(0px)rotate(3.2deg);transform:translatey(0px)rotate(3.2deg)}35%{-webkit-transform:translatey(-3px)rotate(-5.8deg);transform:translatey(-3px)rotate(-5.8deg)}65%{-webkit-transform:translatey(-4px)rotate(4.8deg);transform:translatey(-4px)rotate(4.8deg)}85%{-webkit-transform:translatey(-1px)rotate(-3.5deg);transform:translatey(-1px)rotate(-3.5deg)}}@-moz-keyframes float6{0%,100%{-moz-transform:translatey(0px)rotate(3.2deg);transform:translatey(0px)rotate(3.2deg)}35%{-moz-transform:translatey(-3px)rotate(-5.8deg);transform:translatey(-3px)rotate(-5.8deg)}65%{-moz-transform:translatey(-4px)rotate(4.8deg);transform:translatey(-4px)rotate(4.8deg)}85%{-moz-transform:translatey(-1px)rotate(-3.5deg);transform:translatey(-1px)rotate(-3.5deg)}}@-o-keyframes float6{0%,100%{-o-transform:translatey(0px)rotate(3.2deg);transform:translatey(0px)rotate(3.2deg)}35%{-o-transform:translatey(-3px)rotate(-5.8deg);transform:translatey(-3px)rotate(-5.8deg)}65%{-o-transform:translatey(-4px)rotate(4.8deg);transform:translatey(-4px)rotate(4.8deg)}85%{-o-transform:translatey(-1px)rotate(-3.5deg);transform:translatey(-1px)rotate(-3.5deg)}}@keyframes float6{0%,100%{-webkit-transform:translatey(0px)rotate(3.2deg);-moz-transform:translatey(0px)rotate(3.2deg);-o-transform:translatey(0px)rotate(3.2deg);transform:translatey(0px)rotate(3.2deg)}35%{-webkit-transform:translatey(-3px)rotate(-5.8deg);-moz-transform:translatey(-3px)rotate(-5.8deg);-o-transform:translatey(-3px)rotate(-5.8deg);transform:translatey(-3px)rotate(-5.8deg)}65%{-webkit-transform:translatey(-4px)rotate(4.8deg);-moz-transform:translatey(-4px)rotate(4.8deg);-o-transform:translatey(-4px)rotate(4.8deg);transform:translatey(-4px)rotate(4.8deg)}85%{-webkit-transform:translatey(-1px)rotate(-3.5deg);-moz-transform:translatey(-1px)rotate(-3.5deg);-o-transform:translatey(-1px)rotate(-3.5deg);transform:translatey(-1px)rotate(-3.5deg)}}.brand-float-1.jsx-c7c892e1b4771724{-webkit-animation:float1 8s ease-in-out infinite;-moz-animation:float1 8s ease-in-out infinite;-o-animation:float1 8s ease-in-out infinite;animation:float1 8s ease-in-out infinite}.brand-float-2.jsx-c7c892e1b4771724{-webkit-animation:float2 9s ease-in-out infinite;-moz-animation:float2 9s ease-in-out infinite;-o-animation:float2 9s ease-in-out infinite;animation:float2 9s ease-in-out infinite}.brand-float-3.jsx-c7c892e1b4771724{-webkit-animation:float3 7s ease-in-out infinite;-moz-animation:float3 7s ease-in-out infinite;-o-animation:float3 7s ease-in-out infinite;animation:float3 7s ease-in-out infinite}.brand-float-4.jsx-c7c892e1b4771724{-webkit-animation:float4 10s ease-in-out infinite;-moz-animation:float4 10s ease-in-out infinite;-o-animation:float4 10s ease-in-out infinite;animation:float4 10s ease-in-out infinite}.brand-float-5.jsx-c7c892e1b4771724{-webkit-animation:float5 8.5s ease-in-out infinite;-moz-animation:float5 8.5s ease-in-out infinite;-o-animation:float5 8.5s ease-in-out infinite;animation:float5 8.5s ease-in-out infinite}.brand-float-6.jsx-c7c892e1b4771724{-webkit-animation:float6 9.5s ease-in-out infinite;-moz-animation:float6 9.5s ease-in-out infinite;-o-animation:float6 9.5s ease-in-out infinite;animation:float6 9.5s ease-in-out infinite}.overflow-x-auto.jsx-c7c892e1b4771724::-webkit-scrollbar{display:none}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.spin-slow.jsx-c7c892e1b4771724{-webkit-animation:spin 4s linear infinite;-moz-animation:spin 4s linear infinite;-o-animation:spin 4s linear infinite;animation:spin 4s linear infinite}@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeIn{from{opacity:0;-moz-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeIn{from{opacity:0;-o-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeIn{from{opacity:0;-webkit-transform:translatey(10px);-moz-transform:translatey(10px);-o-transform:translatey(10px);transform:translatey(10px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-fadeIn.jsx-c7c892e1b4771724{-webkit-animation:fadeIn.3s ease-out;-moz-animation:fadeIn.3s ease-out;-o-animation:fadeIn.3s ease-out;animation:fadeIn.3s ease-out}.vinyl-hover.jsx-c7c892e1b4771724:hover,.holographic-hover.jsx-c7c892e1b4771724:hover,.chrome-hover.jsx-c7c892e1b4771724:hover,.glitter-hover.jsx-c7c892e1b4771724:hover,.clear-hover.jsx-c7c892e1b4771724:hover,.banner-hover.jsx-c7c892e1b4771724:hover{background:rgba(255,255,255,.08)!important;border-color:rgba(255,255,255,.15)!important}.logo-hover.jsx-c7c892e1b4771724{-webkit-transition:all.4s cubic-bezier(.175,.885,.32,1.275);-moz-transition:all.4s cubic-bezier(.175,.885,.32,1.275);-o-transition:all.4s cubic-bezier(.175,.885,.32,1.275);transition:all.4s cubic-bezier(.175,.885,.32,1.275)}.logo-hover.jsx-c7c892e1b4771724:hover{-webkit-transform:scale(1.1)rotate(5deg);-moz-transform:scale(1.1)rotate(5deg);-ms-transform:scale(1.1)rotate(5deg);-o-transform:scale(1.1)rotate(5deg);transform:scale(1.1)rotate(5deg);-webkit-filter:drop-shadow(0 0 20px rgba(255,255,255,.6))drop-shadow(0 0 40px rgba(168,242,106,.4))drop-shadow(0 0 60px rgba(168,85,247,.3));filter:drop-shadow(0 0 20px rgba(255,255,255,.6))drop-shadow(0 0 40px rgba(168,242,106,.4))drop-shadow(0 0 60px rgba(168,85,247,.3));-webkit-animation:logo-bounce.6s ease-in-out;-moz-animation:logo-bounce.6s ease-in-out;-o-animation:logo-bounce.6s ease-in-out;animation:logo-bounce.6s ease-in-out}@-webkit-keyframes logo-bounce{0%{-webkit-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}25%{-webkit-transform:scale(1.12)rotate(6deg)translatey(-3px);transform:scale(1.12)rotate(6deg)translatey(-3px)}50%{-webkit-transform:scale(1.15)rotate(4deg)translatey(-5px);transform:scale(1.15)rotate(4deg)translatey(-5px)}75%{-webkit-transform:scale(1.12)rotate(7deg)translatey(-2px);transform:scale(1.12)rotate(7deg)translatey(-2px)}100%{-webkit-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}}@-moz-keyframes logo-bounce{0%{-moz-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}25%{-moz-transform:scale(1.12)rotate(6deg)translatey(-3px);transform:scale(1.12)rotate(6deg)translatey(-3px)}50%{-moz-transform:scale(1.15)rotate(4deg)translatey(-5px);transform:scale(1.15)rotate(4deg)translatey(-5px)}75%{-moz-transform:scale(1.12)rotate(7deg)translatey(-2px);transform:scale(1.12)rotate(7deg)translatey(-2px)}100%{-moz-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}}@-o-keyframes logo-bounce{0%{-o-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}25%{-o-transform:scale(1.12)rotate(6deg)translatey(-3px);transform:scale(1.12)rotate(6deg)translatey(-3px)}50%{-o-transform:scale(1.15)rotate(4deg)translatey(-5px);transform:scale(1.15)rotate(4deg)translatey(-5px)}75%{-o-transform:scale(1.12)rotate(7deg)translatey(-2px);transform:scale(1.12)rotate(7deg)translatey(-2px)}100%{-o-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}}@keyframes logo-bounce{0%{-webkit-transform:scale(1.1)rotate(5deg)translatey(0px);-moz-transform:scale(1.1)rotate(5deg)translatey(0px);-o-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}25%{-webkit-transform:scale(1.12)rotate(6deg)translatey(-3px);-moz-transform:scale(1.12)rotate(6deg)translatey(-3px);-o-transform:scale(1.12)rotate(6deg)translatey(-3px);transform:scale(1.12)rotate(6deg)translatey(-3px)}50%{-webkit-transform:scale(1.15)rotate(4deg)translatey(-5px);-moz-transform:scale(1.15)rotate(4deg)translatey(-5px);-o-transform:scale(1.15)rotate(4deg)translatey(-5px);transform:scale(1.15)rotate(4deg)translatey(-5px)}75%{-webkit-transform:scale(1.12)rotate(7deg)translatey(-2px);-moz-transform:scale(1.12)rotate(7deg)translatey(-2px);-o-transform:scale(1.12)rotate(7deg)translatey(-2px);transform:scale(1.12)rotate(7deg)translatey(-2px)}100%{-webkit-transform:scale(1.1)rotate(5deg)translatey(0px);-moz-transform:scale(1.1)rotate(5deg)translatey(0px);-o-transform:scale(1.1)rotate(5deg)translatey(0px);transform:scale(1.1)rotate(5deg)translatey(0px)}}.headerButton.jsx-c7c892e1b4771724{background:rgba(255,255,255,.1)!important;border:1px solid rgba(255,255,255,.2)!important;-webkit-backdrop-filter:blur(10px)!important;backdrop-filter:blur(10px)!important}.headerButton.jsx-c7c892e1b4771724:hover{background:rgba(255,255,255,.2)!important;border-color:rgba(255,255,255,.3)!important}.headerButton.active.jsx-c7c892e1b4771724{border:.5px solid#a855f7!important;background:rgba(168,85,247,.1)!important;-webkit-box-shadow:0 0 10px rgba(168,85,247,.5),0 0 20px rgba(168,85,247,.3)!important;-moz-box-shadow:0 0 10px rgba(168,85,247,.5),0 0 20px rgba(168,85,247,.3)!important;box-shadow:0 0 10px rgba(168,85,247,.5),0 0 20px rgba(168,85,247,.3)!important}.headerButton.active.jsx-c7c892e1b4771724:hover{background:rgba(168,85,247,.2)!important;border-color:#a855f7!important;-webkit-box-shadow:0 0 15px rgba(168,85,247,.6),0 0 30px rgba(168,85,247,.4)!important;-moz-box-shadow:0 0 15px rgba(168,85,247,.6),0 0 30px rgba(168,85,247,.4)!important;box-shadow:0 0 15px rgba(168,85,247,.6),0 0 30px rgba(168,85,247,.4)!important}.primaryButton.jsx-c7c892e1b4771724{background:-webkit-linear-gradient(315deg,#ffd713,#ffed4e);background:-moz-linear-gradient(315deg,#ffd713,#ffed4e);background:-o-linear-gradient(315deg,#ffd713,#ffed4e);background:linear-gradient(135deg,#ffd713,#ffed4e);color:#030140;font-weight:bold;border:none}.primaryButton.jsx-c7c892e1b4771724:hover{background:-webkit-linear-gradient(315deg,#ffed4e,#ffd713);background:-moz-linear-gradient(315deg,#ffed4e,#ffd713);background:-o-linear-gradient(315deg,#ffed4e,#ffd713);background:linear-gradient(135deg,#ffed4e,#ffd713);-webkit-transform:scale(1.05);-moz-transform:scale(1.05);-ms-transform:scale(1.05);-o-transform:scale(1.05);transform:scale(1.05)}.hero-banner.jsx-c7c892e1b4771724{background-image:url("https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751994147/StickerShuttle_Banner_MainMobile_a93h3q.png");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center bottom;background-repeat:no-repeat}@media(min-width:768px){.hero-banner.jsx-c7c892e1b4771724{background-image:url("https://res.cloudinary.com/dxcnvqk6b/image/upload/v1751382016/StickerShuttle_Banner_Main_nlzoro.")}}',
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [8230, 2742, 4587, 9081, 3448, 636, 6593, 8792], () => t(16760)),
      (_N_E = e.O());
  },
]);
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "933a02b7-1b55-53d0-80ec-9984b22c81ec"));
  } catch (e) {}
})();
//# debugId=933a02b7-1b55-53d0-80ec-9984b22c81ec
