from django.shortcuts import render, redirect
from .models import City, Gallery, Contact
from django.contrib import messages


def home_view(request):
    if request.method == 'POST':
        print(request.POST)
        full_name = request.POST.get('full_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        if full_name and email and phone:
            contact = Contact(full_name=full_name, email=email,
                              phone=phone, message=message)
            contact.save()
            messages.add_message(request, messages.INFO, 'Sent successfully !')
            return redirect('/')
        else:
            messages.add_message(request, messages.INFO,
                                 'Something went wrong ?')

    city = City.objects.all()
    gallery = Gallery.objects.all()
    context = {
        'cities': city,
        'galleries': gallery
    }
    return render(request, 'index.html', context)
