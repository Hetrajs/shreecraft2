import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialProducts = [
    {
      id: 1,
      ProductName: "Shivji - ma parvati",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹500.00",
      OriginalPrice: "₹400.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/7yayt8mu0nc7thhc239dj/shivji-maa-parvati.jpeg?rlkey=bcx8e7dydnxo2lz23q8mo7b3j&st=cyvpn6pz&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/16yiu8ok40ljn9qvjv9vt/2.jpeg?rlkey=zkq1v1towx5zow8t8dte6tb6o&st=aa3l5s7p&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/kj61h6b97g9d89jtjbuva/3.jpeg?rlkey=4f70d2i03c6ffsjv8yjrsjjxz&st=d6ppwen2&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/y2ouw1vilnvj4g1eskmdq/4.jpeg?rlkey=znzct3apq3uqacqmq2he31gpk&st=yrm9vc2n&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/yluz03xhnymxd7vjx1kct/5.jpeg?rlkey=8nvlahfv69er07rf6y2p5o200&st=eiy6v21r&dl=0",
      ],
    },
    {
      id: 2,
      ProductName: "Radha Krishna",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/4iehdjlxetlgnyzga11p2/radha-krishna.jpg?rlkey=662ppdmmu51iqqzu9grlbo0f5&st=1jaryemk&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/fsh66ay57q4u7swh6eyx3/2.jpeg?rlkey=ac9qkl6fncun3i1e6wi8arrkz&st=1i0htb42&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/9nfme2vzzt1dmukniu811/3.jpeg?rlkey=4skgc08sugj5gfh7bvsjxcfbd&st=apflqloi&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/pbfq1pz7h2s87ik96c8st/4.jpeg?rlkey=gp18hezpnvfhskohwy2yclq16&st=lv223a6v&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/5wy762rn37xvqjygrtr7l/5.jpeg?rlkey=vhi9ifew7ruvq074wo56kz40o&st=kalrp3j9&dl=0",
      ],
    },
    {
      id: 3,
      ProductName: "Jai Ganesh",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/uc6lqas3f43ah0kf3z5m8/jai-ganesh.jpg?rlkey=m4infbjbpzuc2gd7mez8v12we&st=zz1eezt1&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/jjxugu6y38zc9sg6w9hjs/2.jpeg?rlkey=9l73tn9l5ffe8f67d0cvfrq0x&st=k2k2dsuu&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/1og4g5ayxuebdezm9asg5/3.jpeg?rlkey=la1k76hjmy8odiiomgmmtlqd9&st=4s6sojhy&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/oo4bufw2ro0h0adhp5efn/4.jpeg?rlkey=wx31dohi59g3dhwcvo7bgvg8k&st=1p720e95&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/gqpnjek2bl3dhsgtuymxl/5.jpeg?rlkey=9g2nxl9atlkankk09g42nm96a&st=3ghqjxrq&dl=0",
      ]
    },
    {
      id: 4,
      ProductName: "Gautam Budhha",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/hl757h8xfijsetkro8zru/buddha.jpg?rlkey=m378xcvkrsm3jwmrgbmua7mbo&st=k2haennm&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/fnifyf824ef13srzawsj8/2.jpeg?rlkey=dik569dbv1e1zgk687of8dkj9&st=rw2tm0oe&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/t4lzx197sec1ofl9rswzg/3.jpeg?rlkey=3zewl28vfw30pxu406zezhpy1&st=45aknofr&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/6kampk8v7hc9zyc1sdz2k/4.jpeg?rlkey=auony0qqsnbgwkhib836nrklj&st=3ptolz9o&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ev7l2uq6vw101y3t89vcd/5.jpeg?rlkey=7umrgijn187xw6uajqnmqo2vg&st=ntp3r3v6&dl=0",
      ]
    },
    {
      id: 5,
      ProductName: "Shiv Ganga",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/6tqua0e3o5t5h6rj43ybb/shivji-ganga.jpg?rlkey=8elioxthmzn54psa0gfftvxi7&st=8l5157d5&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/hyp3wd3e7f36yypu71qi3/2.jpeg?rlkey=itxy4hlzrkwd6h9ehmkrxf1bj&st=r4ydmiku&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/5kiu227kgimu4d3ir7pmw/3.jpeg?rlkey=6fs01q5ksxo7sjbppixha8z9q&st=xe0sduqu&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/05k8vn54azvginntg3zu3/4.jpeg?rlkey=m3encdnqwhg95fev1l218vjn1&st=izyiw9lc&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/tulitr2n40v8asmympd6x/5.jpeg?rlkey=q0uour84n8lzoios7oxyf4o4j&st=zrkwjhpy&dl=0",
      ]
    },
    {
      id: 6,
      ProductName: "Sankat Mochan Hanuman",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/mq9vk6r6620hew0ytrid3/sankat-mochan-hanuman.jpg?rlkey=nn5qq92tjqeal67uu26emsf5f&st=uqmoahsy&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/f2r50i7nc1w99kxiqj5mb/2.jpeg?rlkey=kmgs5lzkft2z9f9i0izmqg775&st=9k6r17f3&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/tqmibx02x7u8hvnxyjnnc/3.jpeg?rlkey=039lniwdas2rpdj9zspb0htt0&st=zlflm7oc&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/fy4b9q23x6aq3dq6bdzdp/4.jpeg?rlkey=x841u4mckdkvks1h9wktaq9bi&st=2pod16sz&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/kx3d254ob0wikm9fz3cvw/5.jpeg?rlkey=gk33d76200doafwohbaxor41k&st=kcobd7bb&dl=0",
      ]
    },
    {
      id: 7,
      ProductName: "Mahakal",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/fjt3mr17oo5gx7lbkxzqy/mahakal.jpg?rlkey=jjuamydlfp3mt3sv6rg8i68r3&st=k765ylef&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/cbo5f5vo8e4n4lniar0vy/2.jpeg?rlkey=oci63ow8pybvs0u3fwjh6huzh&st=95tu4hse&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/3pp7go6zz8ksbga8gsfo4/3.jpeg?rlkey=3ilabx5z8d48koknf0lr4164f&st=17h34zl0&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/xob3br5x0g8y5gh1e5j5j/4.jpeg?rlkey=6qgbxfvi6fb9jfdxe1vlnx5gx&st=y6mthudi&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/rvmjxs0vdqsl0j6y4lehu/5.jpeg?rlkey=b6kh9ivzx2prmjvksmk7xyar8&st=favihomh&dl=0",
      ]
    },
    {
      id: 8,
      ProductName: "Universe Time",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/ox3xfzdisz6ezu2mwbv4h/universe-time.jpg?rlkey=d4ivtd8ceu4txiwhvrfrxtgm0&st=1jxcy68a&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/f9gavx0zd22knuwnmb7z5/2.jpeg?rlkey=bdusljevl0ssat3zd0wbonr09&st=2jp7aamm&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/k3w7f47e9eu6afvy55j8v/3.jpeg?rlkey=5pakhm2o5c6povedpwrdvmdkj&st=nysl0ra4&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/p6ri6daaei64f9elq4ytf/4.jpeg?rlkey=qqkjh8hhoo0hnppyuoerb8as9&st=pfbyp1f4&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/j2z302rc423i0p1j24w7q/5.jpeg?rlkey=0w4kwl3clelqctwx16vzor7gp&st=s5wyawd0&dl=0",
      ]
    },
    {
      id: 9,
      ProductName: "Shree Ganesh",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/uzjfsv9mlyyusolazic0r/shree-ganesh.jpeg?rlkey=nkocy2xu4gqsigt1ywox6ys6k&st=1grgjq0a&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/fu6hamgte6hiedxpqefdc/2.jpeg?rlkey=2ifivml17ptvwalhcny18gqm4&st=us767unx&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/mmvzbnb9mzfp6a0ezt8ol/3.jpeg?rlkey=za2anfxq1rjpwv26gisteqo50&st=p1mq4ihr&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/8ttie3ex9etl522wjlkcx/4.jpeg?rlkey=qy12wul9boaunpmm9x02qkce7&st=vad7wy77&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/mod39ipolco1rudcksjzh/5.jpeg?rlkey=jb738ijvn6vjapxp1j4zzgorn&st=61lc0m85&dl=0",
      ]
    },
    {
      id: 10,
      ProductName: "Red - Blue Rangoli",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/fpx0dne745kg6u2o5nabr/red-blue-art.jpeg?rlkey=5eu3w1vs7wg6yuybf3rmakz9s&st=ljp1ihqr&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/okjikiyhityqinbh2f1zb/2.jpeg?rlkey=e1j7gxh0528kgrouhpc5jgs24&st=j2zayksp&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/a7xk3szqi6ib7t35mjqar/3.jpeg?rlkey=4rwmtg8krebrljrs2zifjonma&st=et0l9ppd&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/rv4vvgjywhsj85z8rp3iq/4.jpeg?rlkey=ym8k5nxb0tq7d2iyxdvn7bvb6&st=8an4f7dh&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/id6drl8bdaohdiu4fvhmz/5.jpeg?rlkey=p8q9lbwa3s44d6abqfn0fvgej&st=xxgpmysn&dl=0",
      ]
    },
    {
      id: 11,
      ProductName: "Yellow - Sky Blue Rangoli",
      MDFSize1: "Default Size",
      MDFSize2: "14 inch, 4 mm + ₹200",
      PriceLineThrough: "₹1,500.00",
      OriginalPrice: "₹1,149.00",
      Images: [
        "https://dl.dropboxusercontent.com/scl/fi/2niyrcm6q1y5djm9xd4so/yellow-blue-rangoli.jpeg?rlkey=epetg5m23vyyk4jy5p5e23ue1&st=z6vo88aw&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/9lekhy0f7dtidprsmqbwd/2.jpeg?rlkey=3wykn8bttxw81j5ptqyruc90c&st=ac633q18&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/3donmflq1hrgc4u6ban4k/3.jpeg?rlkey=df0gccqajs2chabxw0w08mh9c&st=63hls0qi&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/ydneim0woslpu7l992c0u/4.jpeg?rlkey=ellyqo6qypaepg9vru42dmrlr&st=b6ofs7oi&dl=0",
        "https://dl.dropboxusercontent.com/scl/fi/phe0pdw9uq8dqx6w15ok4/5.jpeg?rlkey=607zr7tusama6ffqoihcywanq&st=uzmvlsri&dl=0",
      ]
    },
  ];

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [totalDiscount, setTotalDiscount] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      calculateTotalDiscount();
    } catch (error) {
      console.error("Failed to sync cart with localStorage", error);
    }
  }, [cartItems]);

  const calculateTotalDiscount = () => {
    const discount = cartItems.reduce((total, item) => {
      const price = parseFloat(item.OriginalPrice.replace("₹", "").replace(",", ""));
      return total + item.quantity * (price * 0.1); 
    }, 0);
    setTotalDiscount(discount);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === product.id);
      if (itemIndex > -1) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalUniqueItems = () => new Set(cartItems.map((item) => item.id)).size;

  const getTotalDiscount = () => totalDiscount.toFixed(2);

  const getRecommendedProducts = () => initialProducts.filter(product => !cartItems.some(item => item.id === product.id));

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        getTotalUniqueItems,
        getTotalDiscount,
        getRecommendedProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
