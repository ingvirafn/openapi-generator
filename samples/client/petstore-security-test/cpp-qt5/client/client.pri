QT += network

HEADERS += \
# Models
    $${PWD}/OAIReturn.h \
# APIs
    $${PWD}/OAIFakeApi.h \
# Others
    $${PWD}/OAIHelpers.h \
    $${PWD}/OAIHttpRequest.h \
    $${PWD}/OAIObject.h

SOURCES += \
# Models
    $${PWD}/OAIReturn.cpp \
# APIs
    $${PWD}/OAIFakeApi.cpp \
# Others
    $${PWD}/OAIHelpers.cpp \
    $${PWD}/OAIHttpRequest.cpp
