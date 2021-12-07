const contenedor = document.getElementById('product-container');
const tablaPrecios = document.getElementById('price-table');


contenedor.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-prdct-1')){
        if(document.body.contains(document.getElementById('one'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="one">
                <td class='product-col one'>${contenedor.querySelector('.prdct-1 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-1'>&#45;</button><span id="cantidad-1" class="cantidad">1</span><button id='aumentar-1'>&#43;</button></td>
                <td id="sub-total-1" class='subtotal-col'>${document.getElementById('price-1').textContent}</td>
            </tr>
            `;
        }
        
    } else if(e.target.classList.contains('btn-prdct-2')){
        if(document.body.contains(document.getElementById('two'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="two">
                <td class='product-col one'>${contenedor.querySelector('.prdct-2 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-2'>&#45;</button><span id="cantidad-2" class="cantidad">1</span><button id='aumentar-2'>&#43;</button></td>
                <td id="sub-total-2" class='subtotal-col'>${document.getElementById('price-2').textContent}</td>
            </tr>
            `;
        }

    } else if(e.target.classList.contains('btn-prdct-3')){
        if(document.body.contains(document.getElementById('three'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="three">
                <td class='product-col one'>${contenedor.querySelector('.prdct-3 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-3'>&#45;</button><span id="cantidad-3" class="cantidad">1</span><button id='aumentar-3'>&#43;</button></td>
                <td id="sub-total-3" class='subtotal-col'>${document.getElementById('price-3').textContent}</td>
            </tr>
            `;
        }

    } else if(e.target.classList.contains('btn-prdct-4')){
        if(document.body.contains(document.getElementById('four'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="four">
                <td class='product-col one'>${contenedor.querySelector('.prdct-4 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-4'>&#45;</button><span id="cantidad-4" class="cantidad">1</span><button id='aumentar-4'>&#43;</button></td>
                <td id="sub-total-4" class='subtotal-col'>${document.getElementById('price-4').textContent}</td>
            </tr>
            `;
        }

    } else if(e.target.classList.contains('btn-prdct-5')){
        if(document.body.contains(document.getElementById('five'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="five">
                <td class='product-col one'>${contenedor.querySelector('.prdct-5 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-5'>&#45;</button><span id="cantidad-5" class="cantidad">1</span><button id='aumentar-5'>&#43;</button></td>
                <td id="sub-total-5" class='subtotal-col'>${document.getElementById('price-5').textContent}</td>
            </tr>
            `;
        }

    } else if(e.target.classList.contains('btn-prdct-6')){
        if(document.body.contains(document.getElementById('six'))===false){
            tablaPrecios.querySelector('tbody').innerHTML += `
            <tr id="six">
                <td class='product-col one'>${contenedor.querySelector('.prdct-6 h3').textContent}</td>
                <td class='quantity-col'><button id='disminuir-6'>&#45;</button><span id="cantidad-6" class="cantidad">1</span><button id='aumentar-6'>&#43;</button></td>
                <td id="sub-total-6" class='subtotal-col'>${document.getElementById('price-6').textContent}</td>
            </tr>
            `;
        }

    }
    e.stopPropagation;
});

const totalAmount = document.getElementById('total-amount');
/* Event Listener de la Tabla de Precios */
let precio1, precio2, precio3, precio4, precio5, precio6;

tablaPrecios.addEventListener('click', e => {
    switch(e.target.id){
        case 'disminuir-1':
            if(parseInt(document.getElementById('cantidad-1').textContent)>1){
                document.getElementById('cantidad-1').textContent = parseInt(document.getElementById('cantidad-1').textContent)-1;

                document.getElementById('sub-total-1').textContent = `$${parseFloat(document.getElementById('price-1').textContent) * parseFloat(document.getElementById('cantidad-1').textContent)}`;
               
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('one'));
            };
            break;

        case 'aumentar-1':
            document.getElementById('cantidad-1').textContent = parseInt(document.getElementById('cantidad-1').textContent)+1;

            document.getElementById('sub-total-1').textContent = `$${parseFloat(document.getElementById('price-1').textContent) * parseFloat(document.getElementById('cantidad-1').textContent)}`;
            
            break;

        case 'disminuir-2':
            if(parseInt(document.getElementById('cantidad-2').textContent)>1){
                document.getElementById('cantidad-2').textContent = parseInt(document.getElementById('cantidad-2').textContent)-1;

                document.getElementById('sub-total-2').textContent = `$${parseFloat(document.getElementById('price-2').textContent) * parseFloat(document.getElementById('cantidad-2').textContent)}`;
                
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('two'));
            }
            break;
        case 'aumentar-2':
            document.getElementById('cantidad-2').textContent = parseInt(document.getElementById('cantidad-2').textContent)+1;

            document.getElementById('sub-total-2').textContent = `$${parseFloat(document.getElementById('price-2').textContent) * parseFloat(document.getElementById('cantidad-2').textContent)}`;
           
            break;
            

        case 'disminuir-3':
            if(parseInt(document.getElementById('cantidad-3').textContent)>1){
                document.getElementById('cantidad-3').textContent = parseInt(document.getElementById('cantidad-3').textContent)-1;

                document.getElementById('sub-total-3').textContent = `$${parseFloat(document.getElementById('price-3').textContent) * parseFloat(document.getElementById('cantidad-3').textContent)}`;
                
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('three'));
            }
            break;
        case 'aumentar-3':
            document.getElementById('cantidad-3').textContent = parseInt(document.getElementById('cantidad-3').textContent)+1;

            document.getElementById('sub-total-3').textContent = `$${parseFloat(document.getElementById('price-3').textContent) * parseFloat(document.getElementById('cantidad-3').textContent)}`;
            
            break;
        
        case 'disminuir-4':
            if(parseInt(document.getElementById('cantidad-4').textContent)>1){
                document.getElementById('cantidad-4').textContent = parseInt(document.getElementById('cantidad-4').textContent)-1;

                document.getElementById('sub-total-4').textContent = `$${parseFloat(document.getElementById('price-4').textContent) * parseFloat(document.getElementById('cantidad-4').textContent)}`;
                
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('four'));
            }
            break;
        case 'aumentar-4':
            document.getElementById('cantidad-4').textContent = parseInt(document.getElementById('cantidad-4').textContent)+1;

            document.getElementById('sub-total-4').textContent = `$${parseFloat(document.getElementById('price-4').textContent) * parseFloat(document.getElementById('cantidad-4').textContent)}`;
            
            break;

        case 'disminuir-5':
            if(parseInt(document.getElementById('cantidad-5').textContent)>1){
                document.getElementById('cantidad-5').textContent = parseInt(document.getElementById('cantidad-5').textContent)-1;

                document.getElementById('sub-total-5').textContent = `$${parseFloat(document.getElementById('price-5').textContent) * parseFloat(document.getElementById('cantidad-5').textContent)}`;
               
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('five'));
            }
            break;
        case 'aumentar-5':
            document.getElementById('cantidad-5').textContent = parseInt(document.getElementById('cantidad-5').textContent)+1;

            document.getElementById('sub-total-5').textContent = `$${parseFloat(document.getElementById('price-5').textContent) * parseFloat(document.getElementById('cantidad-5').textContent)}`;
            
            break;

        case 'disminuir-6':
            if(parseInt(document.getElementById('cantidad-6').textContent)>1){
                document.getElementById('cantidad-6').textContent = parseInt(document.getElementById('cantidad-6').textContent)-1;

                document.getElementById('sub-total-6').textContent = `$${parseFloat(document.getElementById('price-6').textContent) * parseFloat(document.getElementById('cantidad-6').textContent)}`;
               
            } else {
                document.querySelector('tbody').removeChild(document.getElementById('six'));
            }
            break;
        case 'aumentar-6':
            document.getElementById('cantidad-6').textContent = parseInt(document.getElementById('cantidad-6').textContent)+1;

            document.getElementById('sub-total-6').textContent = `$${parseFloat(document.getElementById('price-6').textContent) * parseFloat(document.getElementById('cantidad-6').textContent)}`;
            
        case 'remove':
            if(document.querySelector('tbody').hasChildNodes()){
                while(document.querySelector('tbody').firstChild){
                    document.querySelector('tbody').removeChild(document.querySelector('tbody').firstChild);
                }
            }
    }
    e.stopPropagation;
})