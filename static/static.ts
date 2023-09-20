export const menuData = [
    {
      id: 1,
      label: "Home",
      url: "/"
    },
    {
      id: 2,
      label: "About",
      url: "/about",
      children: [
        {
          id: 3,
          label: "Category 1",
          url: "/",
          children: [
            {
              id: 4,
              label: "Product 1",
              url: "/products/category1/product1"
            },
            {
              id: 5,
              label: "Product 2",
              url: "/products/category1/product2"
            }
          ]
        },
        {
          id: 6,
          label: "Category 2",
          url: "/",
          children: [
            {
              id: 7,
              label: "Product 3",
              url: "/products/category2/product3"
            }
          ]
        }
      ]
    },
    {
      id: 8,
      label: "Contact",
      url: "/contact"
    }
  ];


  