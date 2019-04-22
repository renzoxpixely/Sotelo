from django.urls import path, include

from django.contrib import admin

from pages.urls import pages_patterns
from profiles.urls import profiles_patterns
from messenger.urls import messenger_patterns
from django.conf import settings

admin.autodiscover()

import hello.views
import vender.views
# To add a new path, first import the app:
# import blog
#
# Then add the new path:
# path('blog/', blog.urls, name="blog")
#
# Learn more here: https://docs.djangoproject.com/en/2.1/topics/http/urls/

#import quiz
from django.conf.urls import url,include
from django.contrib import admin
from App import views


urlpatterns = [
        path("hello/", hello.views.index, name="home"),
        path("enviar/", hello.views.index, name="enviar"),
        path("quizlaura/", hello.views.index, name="quizlaura"),
        path("quizmaria/", hello.views.index, name="quizmaria"),
        path("quizmartha/", hello.views.index, name="quizmartha"),    
    path('', include('core.urls')),
    path('pages/', include(pages_patterns)),
    path('admin/', admin.site.urls),
    # Paths de Auth
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('registration.urls')),
    # Paths de profiles
    path('profiles/', include(profiles_patterns)),
    # Paths de Messenger
    path('messenger/', include(messenger_patterns)),

        path('vender/', vender.views.index,name="vender"),





#add quiz
    #url(r'^admin/', admin.site.urls),
    url(r'^quiz/',include('App.urls')),
    url(r'^login',views.welcome,name="login"),
    #url(r'^',include('django.contrib.auth.urls')),
    #url(r'^$',views.welcome,name="home"),

]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


