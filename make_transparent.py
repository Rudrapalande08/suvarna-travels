from PIL import Image

def make_transparent(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            # Check if pixel is close to white
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                new_data.append((255, 255, 255, 0)) # transparent
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(e)

make_transparent("assets/images/logo.png", "assets/images/logo_transparent.png")
