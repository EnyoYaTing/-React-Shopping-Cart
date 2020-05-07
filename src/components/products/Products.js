import React from 'react';
import './Products.css';

function RenderItems({item, openSelect, addDrinkItemToSelection}) {
  const {id, name, price, image} = item;
  return (
    <div className="card">
      <div>
        <img src={image} alt={name} width="90%"/>
      </div>
      <div>  
        <p> {name} </p>
        <p> NT${price} </p>
        <button onClick={()=> {openSelect(); addDrinkItemToSelection(id)}} > + </button>
      </div>  
    </div>
  );
}

function Products(props) {
  let drinks = props.drinks.map(item => {
    return (
      <div className="card-horzontal" key={item.id} >
        <RenderItems  item={item} openSelect={props.openSelection} 
                      addDrinkItemToSelection={props.addDrinkItemToSelection}
        />
      </div>  
    );  
  })

  return (
    <div>
      {drinks}
    </div>  
  );
}

// const InventoryTable = ({ selectedStore, selected, productSets, onRowSelect, onSearchTextChange, searchText, onSearch }) => (
//   <TableCard>
//     <TableTitle
//       disabledSearch={true}
//       onSearchTextChange={onSearchTextChange}
//       searchText={searchText}
//       onSearch={onSearch}>
//       <h3>庫存商品列表</h3>
//       <h5 style={{ color: '#60bb71' }}>倉庫: {selectedStore.name} | {selectedStore.level === 'primary' ? '主倉庫' : '副倉庫'}</h5>
//     </TableTitle>
//     <Table multiSelectable onRowSelect={onRowSelect} theme={theme}>
//       <TableHead>
//         <TableCell>產品編號(ID)</TableCell>
//         <TableCell>產品名稱</TableCell>
//         <TableCell>市價 (TWD)</TableCell>
//         <TableCell>售價</TableCell>
//         <TableCell>SKU條碼 / 顏色 - 尺寸 / 總數 / 未分配數量</TableCell>
//       </TableHead>
//       {productSets.map((productSet, idx) => (
//         <TableRow key={idx} selected={selected.indexOf(productSet.id) !== -1}>
//           <TableCell>
//             <div>
//               <p>{productSet.pid.business}</p>
//               <p>({productSet.id})</p>
//             </div>
//           </TableCell>
//           <TableCell className={style.cell}>{productSet.pname.cht || '--'}</TableCell>
//           <TableCell>{productSet.businessPrice.oriPrice || '--'}</TableCell>
//           <TableCell>{productSet.businessPrice.soldPrice || '--'}</TableCell>
//           <TableCell theme={theme}>{productSet.products.map((p, index) => (
//             <Chip key={index} theme={theme}>
//               {`${p.sku} / ${p.color.business} - ${p.size.business} / 總: ${p.totalAmount} / 未: ${p.store ? p.store.undistributedAmount : 0}`}
//             </Chip>
//           )) || '--'}</TableCell>
//         </TableRow>
//       ))}
//     </Table>
//     {false && (<PaginationBar pages={1} page={1} onChange={() => ({})} />)}
//   </TableCard>)

export default Products;